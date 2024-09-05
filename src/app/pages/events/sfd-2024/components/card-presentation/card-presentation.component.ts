import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';


@Component({
  selector: 'app-card-presentation',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './card-presentation.component.html',
  styleUrl: './card-presentation.component.scss'
})
export class CardPresentationComponent {

  readonly data = inject<TimelineEvent>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<CardPresentationComponent>);

  closeModal(){
    console.log('close modal');
    this.dialogRef.close();
  }
  
}
