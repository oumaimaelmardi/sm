import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.css']
})
export class AppareilListComponent implements OnInit {
  isOk: boolean = true;
  appareils: any;
  constructor(private service: ServiceService) {
    setTimeout(() => {
      this.isOk = false;
    }, 5000);
  }

  ngOnInit(): void {
    // Fetch the list of appareils from the backend

    this.service.getAppareils().subscribe(
      appareils => {
        this.appareils = appareils;
        console.log("ok" + appareils)
      },
      error => {
        console.error('Error fetching appareils:', error);
      }
    );

  }


  switchAllOff() {
    this.service.switchAlloff().subscribe(
      (result) => {
        console.log('Switch All Off successful', result);
      },
      (error) => {
        console.error('Error switching all off', error);
      }
    );
  }

  switchAllOn() {
    this.service.switchAllOn().subscribe(
      (result) => {
        console.log('Switch All on successful', result);
      },
      (error) => {
        console.error('Error switching all off', error);
      }
    );
  }

}
