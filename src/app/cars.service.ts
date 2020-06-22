import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarsService {
  getHeroes() {
    throw new Error('Method not implemented.');
  }
  // foundCar: { name: string; year: number; isSold: boolean };

  get getAll() {
    return this.cars;
  }

  private cars: {
    name: string;
    year: number;
    isSold: boolean;
    image: string;
  }[] = [
    {
      name: 'Ford',
      year: 2010,
      isSold: false,
      image:
        'https://i2.wp.com/leocar.com.ua/wp-content/uploads/2019/05/ford-fiesta.jpg?fit=768%2C768&ssl=1',
    },
    {
      name: 'Mazda',
      year: 2013,
      isSold: true,
      image: 'https://i.quto.ru/c533x400/57b6e8d40ca97.png',
    },
    {
      name: 'BMV',
      year: 2009,
      isSold: false,
      image:
        'https://www.cooperbmw.com/assets/stock/colormatched_01/white/640/cc_2020bmc22_01_640/cc_2020bmc220002_01_640_300.jpg?height=400',
    },
    {
      name: 'Audi',
      year: 2011,
      isSold: false,
      image:
        'https://cdn.euroncap.com/media/54606/audi-a1.png?mode=crop&width=359&height=235',
    },
  ];

  constructor(private http: HttpClient) {}

  getTodos(id): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    // return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  addCar(car: {
    name: string;
    year: number;
    isSold: boolean;
    image: string;
  }): void {
    this.cars.unshift(car);
  }

  getByName(index: number): string {
    const foundCar = this.cars[index].name;
    return foundCar;
  }

  getByYear(index: number): number {
    const foundCar = this.cars[index].year;
    return foundCar;
  }
  getByimage(index: number): string {
    const foundCar = this.cars[index].image;
    return foundCar;
  }
}
