import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  imgName: string;
  arr: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit() {
    this.imgName = "A"
  }

  onButtonPress(value: string): void {
    this.imgName = value;
    console.log(value);
  }

}