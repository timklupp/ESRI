import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { MapService } from './map.service';

import { CoordinateComponent } from './coordinate/coordinate.component';
import { AttributeComponent } from './attribute/attribute.component';
import { PointsModel } from './points.model';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MapComponent,
    AttributeComponent,
    CoordinateComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    PointsModel,
    MapService
  ]
})
export class AppModule {
  constructor() {

  }
}
