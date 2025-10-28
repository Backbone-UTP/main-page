import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SFD2025HeroComponent } from './components/hero/hero.component';
import { SFD2025Component } from './sfd-2025.component';
import { SFDHeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SFD2025HeroComponent,
    SFDHeaderComponent,
    SFD2025Component,
  ],
})
export class SFD2025Module {}
