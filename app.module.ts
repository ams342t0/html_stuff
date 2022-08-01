import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { Page1Component } from './page1/page1.component';
import {Routeguard} from './routeguard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorTest} from './http-interceptor';
import {HttpClientModule} from '@angular/common/http';

let route = [
{
	path:"testpage",
	component:Page1Component,
	canActivate:[Routeguard]
}
];


@NgModule({
  imports:      
  [ 
	BrowserModule, 
	FormsModule, 
	HttpClientModule,
	RouterModule.forRoot(route),
	AgGridModule.withComponents([]) 	
	],
  declarations: [ AppComponent, Page1Component ],
  providers:[
  {
	provide:HTTP_INTERCEPTORS,
	useClass:HttpInterceptorTest,
	multi:true
  }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
