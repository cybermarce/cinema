import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


export interface Cinema { 

  name: string;
  id: string;
  distance: number
}  

@Injectable({
  providedIn: 'root'
})

export class CinemaService {

  
    constructor(private http: HttpClient) { }
    
  getCinemas(location:string): Observable <Cinema[]> { 
    return this.http.get<any> ('https://api.cinelist.co.uk/search/cinemas/location/${location}')
    .pipe (
            map (result => result.cinemas)
    ); 

  }
}
