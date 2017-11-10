import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
  cats;
  constructor( private catService: CatService ) {}
  ngOnInit() {
    // This initialises and get the current catService.
    // The cat service is a singleton so will be be a single version of it.
    this.cats = this.catService.get();
  }
  handleNewCat(catName) {
    // Add cats to the cats variable here
    this.catService.push(catName);
    // As Cat service is being updated we need to get it and update cats to update it on the page.
    this.cats = this.catService.get();
  }
}
