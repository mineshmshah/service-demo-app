// core things here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// own imports here
import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatService } from './cat/cat.service';
import { SearchComponent } from './search/search.component';
import { CatFilterComponent } from './cat-filter/cat-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    SearchComponent,
    CatFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  // provide service to the app
  providers: [ CatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
