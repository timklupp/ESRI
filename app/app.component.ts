import { Component, OnInit } from '@angular/core';
import { PointsModel } from './points.model';

import Point = require('esri/geometry/Point');
import Graphic = require('esri/Graphic');
import SimpleMarkerSymbol = require('esri/symbols/SimpleMarkerSymbol');
import Color = require('esri/Color');

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent implements OnInit {
  private pointIndex = 0;
  private pointLongitude = 7.43;
  private pointLatitude = 50.61;
  private defaultSymbol: SimpleMarkerSymbol = new SimpleMarkerSymbol({
    style: 'circle',
    size: 8,
    color: new Color('#000000')
  });
  constructor(private pointsModel: PointsModel) {

  }
  ngOnInit() {

  }
  onClearClicked() {
    this.pointsModel.clear();
    this.pointIndex = 0;
    this.pointLongitude = 7.43;
    this.pointLatitude = 50.61;
  }
  onAddClicked() {
    this.pointIndex++;
    this.pointLatitude += 0.1;
    this.pointLongitude += 0.1;
    let g = new Graphic({
      geometry: new Point({
        longitude: this.pointLongitude,
        latitude: this.pointLatitude
      }),
      attributes: {
        index: this.pointIndex
      },
      symbol: this.defaultSymbol
    });
    this.pointsModel.addPoint(g);
  }
  onViewCreated() {
    console.log('view created');
  }
}
