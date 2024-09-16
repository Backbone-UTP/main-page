import { Component, inject, TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { GrowingCirclesComponent } from '../growing-circles/growing-circles.component';

@Component({
  selector: 'app-card-presentation',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    NgxLoadingModule,
    GrowingCirclesComponent,
  ],
  templateUrl: './card-presentation.component.html',
  styleUrl: './card-presentation.component.scss',
})
export class CardPresentationComponent {
  readonly data = inject<TimelineEvent>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<CardPresentationComponent>);

  loading: boolean = true;
  loading2: boolean = true;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = '#ffffff';
  public loadingTemplate!: TemplateRef<any>;
  public circles = Array(9)
    .fill(0)
    .map((_, index) => 50 + index * 30);
  public circlesColor = '#cab9b6';

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
