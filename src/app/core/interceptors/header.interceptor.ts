import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/enviroments/enviroment";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Authorization = localStorage.getItem("token")
      ? `JWT ${localStorage.getItem("token")}`
      : "";
    // console.log(Authorization);
    req = req.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Authorization': Authorization,
      },
    });
    return next.handle(req);

    // if(req.url.includes('http://localhost:4200/dashboard')){
    //     return next.handle(req.clone({ setHeaders: { Authorization }}));
    // }else{
    //     return next.handle(req);
    // }
  }
}
