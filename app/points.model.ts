import { Injectable } from '@angular/core';

import Graphic = require('esri/Graphic');
import GraphicsLayer = require('esri/layers/GraphicsLayer');
import Collection = require('esri/core/Collection');

@Injectable()
export class PointsModel {
    private points: Collection = new Collection();
    pointsLayer: any;

    constructor() {
        this.pointsLayer = new GraphicsLayer();
        this.points = this.pointsLayer.graphics;
    }
    public addPoint(pointGraphic: Graphic) {
        this.points.add(pointGraphic);
    }
    public addPoints(pointsGraphics: Graphic[]) {
        this.points.addMany(pointsGraphics);
    }
    public getPointGraphics() {
        return this.points;
    }
    public clear() {
        this.points.removeAll();
    }
    public getIndexSum() {
        let sum = 0;
        if (this.points !== null) {
            this.points.forEach(p => sum++);
        }
        return sum;
    }
}