import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-vaccine-information',
  templateUrl: './before-vaccine-information.component.html',
  styleUrls: ['./before-vaccine-information.component.scss']
})
export class BeforeVaccineInformationComponent implements OnInit {


  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  

  constructor() { }

  ngOnInit() {
  }

}
