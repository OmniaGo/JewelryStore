import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppItemsCatalogComponent } from './ItemsCatalog/app-items-catalog.component';
import { AppItemDetailsComponent } from './ItemDetails/app-item-details.component';
import { AppAccessoriesComponent } from './AccessoriesCatalog/app-accessories.component';
import { AppRestService } from './services/app.rest.service';

@NgModule({
  declarations: [
    AppComponent,
    AppAccessoriesComponent,
    AppItemsCatalogComponent,
    AppItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AppRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
