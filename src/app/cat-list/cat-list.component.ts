import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
cats;
  constructor( catService: CatService ) {
    this.cats = catService.get();
    debugger;
  }
  ngOnInit() {
  }

}
