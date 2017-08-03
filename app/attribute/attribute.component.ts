import { Component, OnInit } from '@angular/core';

import Collection = require('esri/core/Collection');

import { PointsModel } from '../points.model';

@Component({
    selector: 'controlling-display',
    templateUrl: './app/attribute/attribute.component.html'
})
export class AttributeComponent implements OnInit {
    points: Collection;
    constructor(private pointsModel: PointsModel) { }

    ngOnInit() {
        this.points = this.pointsModel.getPointGraphics();
    }
}