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
    // this returns a copy of the cats rather than a reference to cats
    // This is an immutable function
    return [...this.cats];
  }
  // we need to define a push method as the class doesn't have a push method
  // Every time this method is called a cat will be updated to this singleton service and be updated.
  // Note that if this changes, then we need to make sure an updated version is puled down with a get method.
  push(cat) {
    this.cats.push(cat);
  }

  filter(searchTerm){
    searchTerm = searchTerm.toLowerCase();
    // filter returns a cop of the array.
    return this.cats.filter((cat) => {
      cat.toLowerCase().includes(searchTerm);
    });
  }



}
