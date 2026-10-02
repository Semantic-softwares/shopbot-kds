/** Tailwind classes + a solid color for one board column (and its tickets). */
export interface ColumnTone {
  header: string;
  border: string;
  text: string;
  /** Background for the ticket's action button. */
  solid: string;
}

const TONES: Record<string, ColumnTone> = {
  pending: {
    header: 'bg-red-600 text-white',
    border: 'border-red-500/70',
    text: 'text-red-600 dark:text-red-400',
    solid: '#dc2626',
  },
  preparing: {
    header: 'bg-amber-500 text-slate-950',
    border: 'border-amber-500/70',
    text: 'text-amber-600 dark:text-amber-400',
    solid: '#d97706',
  },
  ready: {
    header: 'bg-emerald-500 text-slate-950',
    border: 'border-emerald-500/70',
    text: 'text-emerald-600 dark:text-emerald-400',
    solid: '#059669',
  },
  picked_up: {
    header: 'bg-slate-600 text-white',
    border: 'border-slate-500/70',
    text: 'text-slate-600 dark:text-slate-300',
    solid: '#475569',
  },
};

export function columnTone(statusKey: string): ColumnTone {
  return TONES[statusKey] ?? TONES['picked_up'];
}
