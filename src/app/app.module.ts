import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleNewsComponent } from './single-news/single-news.component';

import { DataService } from './service/data.service';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routerConfig: Routes = [
  {'path': '', 'component': HomeComponent},
  {'path': 'home', 'component': HomeComponent},
  {'path': 'post/:id', 'component': SingleNewsComponent},
  {'path': '**', 'component': HomeComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleNewsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
