import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-unirse-comunidad',
  templateUrl: './unirse-comunidad.component.html',
  styleUrls: ['./unirse-comunidad.component.scss'],
  imports: [ButtonComponent]
})
export class UnirseComunidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}