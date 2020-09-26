import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disease-case-information',
  templateUrl: './disease-case-information.component.html',
  styleUrls: ['./disease-case-information.component.scss']
})
export class DiseaseCaseInformationComponent implements OnInit {

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  
  constructor() { }

  ngOnInit() {
  }

}
