import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat/cat.service';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.css'],

})
export class CatFilterComponent implements OnInit {

  constructor(private catService: CatService) { }
  cats;
  ngOnInit() {
  }
  filterCat(catName) {
    this.cats = this.catService.filter(catName);
  }
}

