import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarsService } from '../cars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() carItem: { name: string; year: number; isSold: boolean };
  @Input() carIndex: number;
  readonly carStatus = CarStatus;

  changeName: FormControl;

  change: boolean = false;

  cars = [];

  newName: string = '';

  constructor(private service: CarsService, private router: Router) {}

  ngOnInit(): void {
    this.changeName = new FormControl(this.carItem.name);
  }

  getClass() {
    return {
      'list-group-item-success': !this.carItem.isSold,
      'list-group-item-danger': this.carItem.isSold,
      'list-group-item': true,
    };
  }

  onAction(type, event) {
    this.carItem.isSold = type === this.carStatus.Buy;
    event.stopPropagation();
  }

  showInputOnChange(event) {
    this.change = true;
    event.stopPropagation();
  }

  saveChange() {
    this.newName = this.changeName.value;
    this.carItem.name = this.newName;
    console.log(this.newName);
    this.change = false;
  }

  carDelete() {
    this.cars = this.service.getAll;
    this.cars.splice(this.carIndex, 1);

    console.log(this.carIndex);
  }

  carInfo() {
    this.router.navigate(['cars', 'info'], {
      queryParams: { id: this.carIndex },
    });
  }
}

enum CarStatus {
  Buy = 'Buy',
  Refund = 'Refund',
}
