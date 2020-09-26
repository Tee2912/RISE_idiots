import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disease-case-info-travelling',
  templateUrl: './disease-case-info-travelling.component.html',
  styleUrls: ['./disease-case-info-travelling.component.scss']
})
export class DiseaseCaseInfoTravellingComponent implements OnInit {

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
