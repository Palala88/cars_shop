import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AppCarComponent } from './app-car/app-car.component';
import { CarFilterPipe } from './car-filter.pipe';
import { SortByPipe } from './car-filter.pipe';

import { CarsService } from './cars.service';
import { LoginComponent } from './login/login.component';
import { CarInfoComponent } from './car-info/car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AppCarComponent,
    CarFilterPipe,
    SortByPipe,
    LoginComponent,
    CarInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
