import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapService } from './map.service';

import MapView = require('esri/views/MapView');
import Point = require('esri/geometry/Point');
import SpatialReference = require('esri/geometry/SpatialReference');

@Component({
  selector: 'esri-map',
  template: '<div id="viewDiv"><ng-content></ng-content></div>',
  styles: [require('./map.component.css')]
})
export class MapComponent {

  @Output()
  viewCreated = new EventEmitter();

  mapView: MapView;

  constructor(private mapService: MapService,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.mapView = new MapView({
      container: this.elementRef.nativeElement.firstChild,
      map: this.mapService.map,
      center: new Point({
        x: 7.44,
        y: 50.61,
        spatialReference: new SpatialReference({ wkid: 4326 })
      }),
      zoom: 5
    });
    this.viewCreated.next(this.mapView);
  }
}
