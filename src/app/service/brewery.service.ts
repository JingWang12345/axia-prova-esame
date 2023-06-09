import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

readonly BASE_URL = 'https://api.openbrewerydb.org/v1/breweries';
readonly breweryURL = 'https://api.openbrewerydb.org/v1/breweries';

  constructor(private http: HttpClient) {

  }

getBreweries(): Observable<any>{
  return this.http.get<any>(this.BASE_URL).pipe(
    map((data:any) => data)
  )
}

getDetail(id: string){
  return this.http.get<any>(this.breweryURL + id).pipe(
    map((data:any) => data)
  )
}

}
