import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  sorts: { value: string }[] = [
    { value: 'alphabetically' },
    { value: 'years' },
  ];

  searchCar = '';
  cars = [];

  constructor(private service: CarsService) {}

  ngOnInit(): void {
    this.cars = this.service.getAll;
  }
}
