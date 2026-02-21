import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  title = 'Semillero y Comunidad Backbone';
  subTitle =
    'Somos una comunidad y semillero de investigación dedicado a fomentar el aprendizaje, la colaboración y la innovación en tecnología.';

  ctaText = 'Únete a la comunidad';
  imageUrl = 'assets/images/abstract_img.jpg';
}
