import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: CarsService) {}
  id: number;
  name: string;
  year: number;
  image: string;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });

    this.name = this.service.getByName(this.id);
    this.year = this.service.getByYear(this.id);
    this.image = this.service.getByimage(this.id);
  }
}
