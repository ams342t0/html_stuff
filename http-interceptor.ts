import {HttpInterceptor, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpInterceptorTest implements HttpInterceptor{

	intercept(request:HttpRequest<any>, next:HttpHandler)
	{
		console.log("Intercepting");
		return next.handle(request).pipe(
			map((event:HttpEvent<any>)=>{
				console.log("mapping",event);
				return event;
			}),
			tap((e)=>{
				console.log("Intercept tap",e);
			})
			,
			catchError((e)=>{
				if (e.status == 0) {
					console.log("Unknown error", e.name);
				}
				else 
					console.log("Intercept error",e);
				return throwError(e);
			})
		);
	}
}
