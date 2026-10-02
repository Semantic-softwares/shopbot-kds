import { Injectable, signal } from '@angular/core';

export type SoundId = 'chime' | 'bell' | 'dingdong' | 'alert';

export const SOUNDS: SoundId[] = ['chime', 'bell', 'dingdong', 'alert'];

const SOUND_KEY = 'kds_sound';
const ENABLED_KEY = 'kds_sound_enabled';
const REPEAT_KEY = 'kds_sound_repeat';

/** Ring once per new order, or keep ringing until it's started. */
export type SoundRepeat = 'once' | 'repeat';

type Note = { freq: number; start: number; duration: number; type: OscillatorType; volume: number };

// Synthesized with Web Audio so no audio files ship with the kiosk.
const PATTERNS: Record<SoundId, Note[]> = {
  chime: [
    { freq: 659.25, start: 0, duration: 0.35, type: 'sine', volume: 0.35 },
    { freq: 987.77, start: 0.18, duration: 0.6, type: 'sine', volume: 0.35 },
  ],
  bell: [
    { freq: 880, start: 0, duration: 1.4, type: 'sine', volume: 0.4 },
    { freq: 1760, start: 0, duration: 0.9, type: 'sine', volume: 0.12 },
    { freq: 2637, start: 0, duration: 0.5, type: 'sine', volume: 0.06 },
  ],
  dingdong: [
    { freq: 659.25, start: 0, duration: 0.55, type: 'triangle', volume: 0.45 },
    { freq: 523.25, start: 0.45, duration: 0.8, type: 'triangle', volume: 0.45 },
  ],
  alert: [
    { freq: 1046.5, start: 0, duration: 0.12, type: 'square', volume: 0.12 },
    { freq: 1046.5, start: 0.2, duration: 0.12, type: 'square', volume: 0.12 },
    { freq: 1046.5, start: 0.4, duration: 0.12, type: 'square', volume: 0.12 },
  ],
};

/** The new-order alert: which sound, whether it's on, and playing it. */
@Injectable({ providedIn: 'root' })
export class SoundService {
  readonly sound = signal<SoundId>(this.initialSound());
  readonly enabled = signal<boolean>(localStorage.getItem(ENABLED_KEY) !== 'false');
  readonly repeat = signal<SoundRepeat>(localStorage.getItem(REPEAT_KEY) === 'repeat' ? 'repeat' : 'once');

  private context: AudioContext | null = null;

  constructor() {
    // Browsers only allow audio after a user gesture; unlock on the first one
    // so the first incoming order can actually be heard.
    const unlock = () => this.audio()?.resume();
    document.addEventListener('pointerdown', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
  }

  setSound(sound: SoundId): void {
    this.sound.set(sound);
    localStorage.setItem(SOUND_KEY, sound);
  }

  setRepeat(repeat: SoundRepeat): void {
    this.repeat.set(repeat);
    localStorage.setItem(REPEAT_KEY, repeat);
  }

  setEnabled(enabled: boolean): void {
    this.enabled.set(enabled);
    localStorage.setItem(ENABLED_KEY, String(enabled));
  }

  /** Play the selected sound if alerts are on. */
  playNewOrder(): void {
    if (this.enabled()) this.play(this.sound());
  }

  play(sound: SoundId): void {
    const ctx = this.audio();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const t0 = ctx.currentTime + 0.02;
    for (const note of PATTERNS[sound]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = note.type;
      osc.frequency.value = note.freq;
      gain.gain.setValueAtTime(0.0001, t0 + note.start);
      gain.gain.exponentialRampToValueAtTime(note.volume, t0 + note.start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + note.start + note.duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0 + note.start);
      osc.stop(t0 + note.start + note.duration + 0.05);
    }
  }

  private audio(): AudioContext | null {
    if (!this.context && typeof AudioContext !== 'undefined') this.context = new AudioContext();
    return this.context;
  }

  private initialSound(): SoundId {
    const saved = localStorage.getItem(SOUND_KEY) as SoundId | null;
    return saved && SOUNDS.includes(saved) ? saved : 'chime';
  }
}
