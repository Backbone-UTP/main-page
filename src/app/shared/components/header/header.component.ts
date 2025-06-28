import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent{
  spacesTitle = '';
  spacesSubtitle = '';
  Title = 'Semillero y\nComunidad\nBackbone';
  subTitle = 'Somos una comunidad y semillero de investigación dedicado\na fomentar el aprendizaje, colaboración y la innovación en\ntecnología.';
  
  constructor() {
    this.spacesTitle = this.Title.replace(/\n/g, '<br>');
    this.spacesSubtitle = this.subTitle.replace(/\n/g, '<br>');
  }

  ctaText = 'Únete a la comunidad';
  imageUrl = 'assets/images/plantilla-header.png';
}