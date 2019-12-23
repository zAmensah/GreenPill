import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import io from 'socket.io-client';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patients: any;
  socket: any;

  constructor(
    private data: DataService,
    private rest: RestApiService
  ) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.getPatient();

    this.socket.on('refreshPage', () => {
      this.getPatient();
    });
  }

  // patients list
  async getPatient(event?: any) {
    if (event) {
      this.patients = null;
    }
    try {
      const res = await this.rest.get(
        'http://localhost:3000/api/patient'
      );
      res['success']
        ? this.patients = res
        : this.data.error(res['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
