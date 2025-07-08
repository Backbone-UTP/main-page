import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})

export class HeroComponent{
    spacesTitle = '';
    spacesSubtitle = '';
    title = 'Semillero y\nComunidad\nBackbbone';
    subTitle = 'Somos una comunidad y semillero de investigación dedicado\na fomentar el aprendizaje, colaboración y la innovación en\ntecnología.';

    constructor(){
        this.spacesTitle = this.title.replace(/\n/g, '<br>');
        this.spacesSubtitle = this.subTitle.replace(/\n/g, '<br>');
    }

    ctaText = 'Únete a la comunidad';
    imageUrl = 'assets/images/plantilla-hero.png';
}