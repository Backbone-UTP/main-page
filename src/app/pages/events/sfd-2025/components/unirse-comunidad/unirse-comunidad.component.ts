import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../../../../../shared/components/icons/icons.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-unirse-comunidad',
  imports: [ButtonComponent, IconComponent],
  templateUrl: './unirse-comunidad.component.html',
  styleUrls: ['./unirse-comunidad.component.scss']
})
export class UnirseComunidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}