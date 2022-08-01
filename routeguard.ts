import {CanActivate,
ActivatedRouteSnapshot,
RouterStateSnapshot} from '@angular/router';

import {Injectable} from '@angular/core';
import {TestGuardService} from './testguard.service';
import {Observable,Subject} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable(
{providedIn:'root'}
)
export class Routeguard implements CanActivate{
	constructor(private ts:TestGuardService){
		
		
	}
	
	
	canActivate(route: ActivatedRouteSnapshot,
		state:RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
			
			/*let s : Subject<string> = new Subject<string>();
			
			s.next("ok");
			
			return s.pipe(map((v:string)=>{
				console.log(v);
				if (v=="ok") {
					console.log(v);
					return true;
				}
				else {
					return false;
				}
			}));*/
			
			
			
			// Using promise
			console.log('waiting for promise...');
			
			
			return new Promise<boolean>((res,rej)=>{
				setTimeout(()=>{
					if (this.ts.testVar == 1)  {
						console.log("Promise says YES!");
						res(true);
					}
					else {
						console.log("Promise fulfilled...  NO!");
						res(false);
					}
				},3000);
			});
			
			
			/*
			// plain boolean
			if (this.ts.testVar == 1) 
				return true;
			else
				return false;
			*/
		}
}
