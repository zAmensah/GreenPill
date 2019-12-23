import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { RestApiService } from 'src/app/services/rest-api.service';
import { DataService } from 'src/app/services/data.service';
import io from 'socket.io-client';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  approveCount: any;
  checkin: any;
  socket: any;

  isHandset$: Observable<boolean> = this.breakpoint.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches), shareReplay()
    );

  constructor(
    private breakpoint: BreakpointObserver,
    private router: Router,
    private snackbar: MatSnackBar,
    private rest: RestApiService,
    public data: DataService
  ) {
    this.data.getProfile();
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.appointmentCount();
    this.checkCount();

    this.socket.on('refreshPage', () => {
      this.appointmentCount();
      this.checkCount();
    })
  }

  get token() {
    return localStorage.getItem('token');
  }

  // log out
  logout() {
    this.data.staff = {};
    localStorage.clear();
    this.router.navigate(['/login']);
    this.snackbar.open('Logged Out Successfully', 'OK', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  // appointment badge
  async appointmentCount() {
    try {
      const res = this.rest.get(
        'http://localhost:3000/api/appointment/length/approve'
      );
      res['success']
        ? this.approveCount = res['approve']
        : this.data.error(res['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  // check-in
  async checkCount() {
    try {
      const res = this.rest.get(
        'http://localhost:3000/api/check/length'
      );
      res['success']
        ? this.checkin = res['count']
        : this.data.error(res['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
