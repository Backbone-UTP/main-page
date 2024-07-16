import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SFD2024HeroComponent } from './components/hero/hero.component';
import { SFD2024Component } from './sfd-2024.component';
import { SFDHeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SFD2024HeroComponent,
    SFDHeaderComponent,
    SFD2024Component,
  ],
})
export class SFD2024Module {}
