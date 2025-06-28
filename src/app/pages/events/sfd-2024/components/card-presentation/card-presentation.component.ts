import { Component, inject, TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';
import { GrowingCirclesComponent } from '../growing-circles/growing-circles.component';

@Component({
    selector: 'app-card-presentation',
    imports: [
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        GrowingCirclesComponent,
        ButtonComponent,
    ],
    templateUrl: './card-presentation.component.html',
    styleUrl: './card-presentation.component.scss'
})
export class CardPresentationComponent {
  readonly data = inject<TimelineEvent>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<CardPresentationComponent>);

  loading: boolean = true;
  loading2: boolean = true;
  public primaryColour = '#ffffff';
  public loadingTemplate!: TemplateRef<Element>;
  public circles = Array(9).fill(0).map((_, index) => 50 + index * 30);
  public circlesStyle = 'border-[#424242] dark:border-[#cab9b6]';

  imageLoaded() {
    this.loading = false;
  }

  imageLoaded2() {
    this.loading2 = false;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
