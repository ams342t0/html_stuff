import {Injectable} from '@angular/core';

@Injectable(
{
	providedIn:'root'
}
)
export class TestGuardService {
	testVar = 1;
	constructor(){
		console.log("service good");
	}
}
