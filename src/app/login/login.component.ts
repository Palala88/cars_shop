import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  genders: { text: string }[] = [{ text: 'Male' }, { text: 'Female' }];
  minYear: number = 18;
  form: FormGroup;

  get name() {
    return this.form.get('name');
  }
  get year() {
    return this.form.get('year');
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      year: new FormControl('', [
        Validators.required,
        Validators.min(this.minYear),
      ]),
      gender: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.router.navigate(['/cars']);
    console.log(this.form.value);
  }
}
