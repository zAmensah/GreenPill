import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message = '';
  messageType = '';

  staff: any;
  patient: any;

  constructor(
    private router: Router,
    private rest: RestApiService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }

  async getProfile() {
    try {
      if (localStorage.getItem('token')) {
        const data = await this.rest.get(
          'http://localhost:3000/api/staff/profile'
        );
        this.staff = data['staff']
      }
    } catch (e) {
      this.error(e)
    }
  }

  async getPatient() {
    try {
      const data = await this.rest.get(
        'http://localhost:3000/api/patient/profile'
      );
      this.patient = data['patient'];
    } catch (e) {
      this.error(e)
    }
  }

}
