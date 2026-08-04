import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-code-of-conduct',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './code-of-conduct.component.html',
  styleUrls: ['./code-of-conduct.component.scss'],
})
export class CodeOfConductComponent {}
