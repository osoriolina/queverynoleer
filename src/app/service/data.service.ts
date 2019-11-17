import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Subject<object> = new Subject<object>();


  constructor(
    public _http: HttpClient,
  ) { }

  httpGet() {
    let url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=4ecd951b262b4b0e9ad9a0bd93669167'

    this._http.get(url,
    {headers: new HttpHeaders({'x-requested-with': 'XMLHttpResponse'})}
    )
    .subscribe( 
      (result) => {this.data.next(result)}
    )
  }
}
