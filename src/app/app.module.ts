import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppItemsCatalogComponent } from './ItemsCatalog/app-items-catalog.component';
import { AppItemDetailsComponent } from './ItemDetails/app-item-details.component';
import { AppAccessoriesComponent } from './AccessoriesCatalog/app-accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAccessoriesComponent,
    AppItemsCatalogComponent,
    AppItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
