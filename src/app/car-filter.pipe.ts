import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {
  transform(cars: { name: string }[], searchStr: string) {
    if (!cars.length || !searchStr) {
      return cars;
    }

    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
}
