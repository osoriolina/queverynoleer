import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent {

  id: number;
  post: object;
  subscription: Subscription;
  textoUsuario: string;
  userOutput: string;
  views: boolean[] = [true, false];


  constructor(
    public _path: ActivatedRoute,
    public _data: DataService
  ) {

    this.id = this._path.snapshot.params.id;

    this._data.httpGet();

    this.subscription = this._data.data.subscribe(
      (objResult) => {
        let position = this.id;
        this.post = objResult['articles'][position];
      });
  }

  printText() {
    console.log(this.textoUsuario)
    this.userOutput = this.textoUsuario;

  }

  showView(valores: boolean[]): void {
    this.views = valores;
  }
}


