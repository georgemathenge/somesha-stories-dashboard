import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

httpHeaders: HttpHeaders
  constructor( private http :HttpClient) {

    this.httpHeaders= new HttpHeaders(
  //     {

  //   'Authorization': 'Bearer ' + this.getAccessToken(),
  //   "Access-Control-Allow-Origin":"http://192.168.100.7:4200",
  //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  //   'Token': 'Bearer ' + this.getAccessToken()
  // }
  )
      .set('Authorization', 'Bearer ' + this.getAccessToken())
   }

   getAccessToken = () => {
    let token: string | null = '';
    if (localStorage.getItem('accessToken')) {
        token = localStorage.getItem('accessToken');
    }
    return token;
};
post(url: string, body:any): Observable<any> {

  return this.http.post(environment.BASE_URL + url, body,
     {
      headers: this.httpHeaders,
      observe:'body'
  }
  ).pipe(catchError(error => {
      return error
  })) 
}
get(url: string): Observable <any> {

  return this.http.get(environment.BASE_URL + url, {
      headers: this.httpHeaders
  }).pipe(catchError(error => {
      return error
  }));
}
}
