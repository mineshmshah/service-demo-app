import { Injectable } from '@angular/core';

@Injectable()
export class CatService {
  // Attributes first then constructor then methods for style
  private cats = [
    'Monty',
    'Blanco',
    'Arthur',
    'Fatso'
  ];

  get() {
    // this returns a copy of the cats
    return [...this.cats];
  }



}
