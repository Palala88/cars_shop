import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { CarInfoComponent } from './car-info/car-info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/info', component: CarInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
