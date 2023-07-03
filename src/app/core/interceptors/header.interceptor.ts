import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { LoaderService } from "src/app/scaffold/loader.service";
import { environment } from "src/enviroments/enviroment";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    const Authorization = localStorage.getItem("token")
      ? `JWT ${localStorage.getItem("token")}`
      : "";
    // console.log(Authorization);
    req = req.clone({
      setHeaders: {
        Accept: "application/json",
        Authorization: Authorization,
      },
    });
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );

    // if(req.url.includes('http://localhost:4200/dashboard')){
    //     return next.handle(req.clone({ setHeaders: { Authorization }}));
    // }else{
    //     return next.handle(req);
    // }
  }
}
