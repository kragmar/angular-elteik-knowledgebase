import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  imgName: string;
  building: string;

  constructor() { }

  ngOnInit() {
    this.imgName = '0';
    this.building = 'd';
  }

  onButtonPress(value: string): void {
    this.imgName = value;
  }

  switchBuilding(value: string): void {
    this.building = value;
  }

}