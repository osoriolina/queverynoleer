import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: object;
  subscription: Subscription;
  //post: object[] = this._data.post;

  constructor(
    public _http: HttpClient,
    public _data: DataService,
    public _path: ActivatedRoute
  ) {
    this.subscription = this._data.data.subscribe(
      (newValue) => { this.data = newValue })
  }

  ngOnInit() {
    this._data.httpGet()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}