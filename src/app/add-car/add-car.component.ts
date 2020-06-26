import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear: number = 2017;
  constructor(private service: CarsService) {}
  ngOnInit(): void {}
  addCar() {
    this.service.addCar({
      name: this.carName,
      year: this.carYear,
      isSold: false,
      image:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    });
    this.carName = '';
  }
}
