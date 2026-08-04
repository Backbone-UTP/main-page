import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  imports: [BrowserModule, AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
