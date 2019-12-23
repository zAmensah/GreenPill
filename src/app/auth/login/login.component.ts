import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  btnDisabled = false;

  constructor(
    public data: DataService,
    private rest: RestApiService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  async login() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const res = await this.rest.post(
          'http://localhost:3000/api/staff/login',
          {
            email: this.email,
            password: this.password
          }
        ).toPromise();
        if (res['success']) {
          localStorage.setItem('token', res['token']);
          await this.data.getProfile();
          this.router.navigate([''])
        } else {
          this.data.error(res['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

  validate() {
    if (this.email) {
      if (this.password) {
        return true;
      } else {
        this.snackbar.open('Please Enter Password', 'Retry', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        })
      }
    } else {
      this.snackbar.open('Please Enter Email', 'Retry', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
    }
  }

}
