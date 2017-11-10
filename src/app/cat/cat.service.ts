import { Injectable } from '@angular/core';

@Injectable()
export class CatService {
  // Attributes first then constructor then methods for style
  private   cats = [
    'Monty',
    'Blanco',
    'Arthur',
    'Fatso'
  ];

  get() {
    return this.cats;
  }



}
