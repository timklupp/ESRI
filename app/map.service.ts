import { Injectable } from '@angular/core';

import Map = require('esri/Map');
import GraphicsLayer = require('esri/layers/GraphicsLayer');

import { PointsModel } from './points.model';
@Injectable()
export class MapService {
  map: Map;
  pointGraphicsLayer: GraphicsLayer;

  constructor(pointsModel: PointsModel) {
    this.map = new Map({
      basemap: 'topo'
    });
    this.map.add(pointsModel.pointsLayer);
  }
}
