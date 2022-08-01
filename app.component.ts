import { Component , OnInit} from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

	constructor(private http:HttpClient){}

	
	ngOnInit(){
		this.http.post("https://www.google.com",null).subscribe(
			(res:any)=>{
				console.log("subscription body",res);
			}
		);
		console.log("working!");
	}
}
