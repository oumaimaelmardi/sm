import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, catchError } from 'rxjs';
import { AppareilModel } from '../model/appareil.model';
import { map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  url = "http://localhost:8094/api/appareils/";
  appareils: AppareilModel[] = []; // Use the AppareilModel type
  constructor(private httpClient: HttpClient) { }
  /* getAppareils(): Observable<any[]> {
     return this.appareils = this.httpClient.get<any[]>(this.url)
   }*/






  getAppareils(): Observable<AppareilModel[]> {
    // Use the AppareilModel type for the return type
    return this.httpClient.get<AppareilModel[]>(this.url);
  }
  switchAllOn(): Observable<any> {
    return this.getAppareils().pipe(
      // Use switchMap to send the fetched appareils array to the backend API
      switchMap((appareils: AppareilModel[]) => {


        // Update the states on the backend using a PUT request
        return this.httpClient.put(this.url + "switchOn", appareils);
      })
    );
  }
  /* switchAllOff(): Observable<any> {
     const switchAllOffUrl = `${this.url}switchOff`;

     return this.httpClient.put<any>(switchAllOffUrl, {}).pipe(
       catchError((error: any) => {
         console.error('Error switching all off:', error);
         throw error;  // Rethrow the error so the caller can handle it
       })
     );
   }*/
  switchAlloff(): Observable<any> {
    // Get the list of appareils

    // Fetch the list of appareils
    return this.getAppareils().pipe(
      // Use switchMap to send the fetched appareils array to the backend API
      switchMap((appareils: AppareilModel[]) => {
        // Assuming your backend API endpoint for updating states is '/api/appareils'


        // Update the states on the backend using a PUT request
        return this.httpClient.put(this.url + "switchOff", appareils);
      })
    );


  }


  /*switchAllOn(): void {
    this.appareils.forEach(appareil => {
      appareil.statut = "On";
    });


  }

  switchAllOff(): void {
    this.appareils.forEach(appareil => {
      appareil.statut = "Off";
    });


  }*/
}
