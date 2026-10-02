import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { I18nService, Language, LANGUAGES } from '../../services/i18n.service';
import { SoundId, SOUNDS, SoundService } from '../../services/sound.service';
import { ThemeMode, ThemeService } from '../../services/theme.service';
import { StoreService } from '../../services/store.service';

/** What the board should do once the dialog closes. */
export type SettingsResult = { switchToStoreId: string } | { logout: true } | undefined;

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './settings-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsDialogComponent {
  private dialogRef = inject(MatDialogRef<SettingsDialogComponent, SettingsResult>);
  protected i18n = inject(I18nService);
  protected sound = inject(SoundService);
  protected theme = inject(ThemeService);
  protected storeService = inject(StoreService);

  protected readonly languages = LANGUAGES;
  protected readonly sounds = SOUNDS;

  protected setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  protected setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
  }

  protected chooseSound(sound: SoundId): void {
    this.sound.setSound(sound);
    this.sound.play(sound);
  }

  protected switchStore(storeId: string): void {
    if (storeId !== this.storeService.currentStore()?._id) {
      this.dialogRef.close({ switchToStoreId: storeId });
    }
  }

  protected logout(): void {
    this.dialogRef.close({ logout: true });
  }
}
