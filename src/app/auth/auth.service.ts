import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from './credentials';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, UrlTree } from '@angular/router';
// import jwt_decode from 'jsonwebtoken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  public userId?: number;


  
  
  constructor( private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {
    const token = localStorage.getItem('token');
    this.getCurrentUserId();
    
   }

   getCurrentUserId(): any{
    const token = localStorage.getItem('token');
    if(token){
      this.userId = new JwtHelperService().decodeToken(token)["user_id"];
      // console.log(decoded);
    }
   }


  authUrl = `${environment.baseUrl} + /accounts/get-token/`;

  login$(credentials: Credentials){
   return this.http.post<any>("http://45.79.31.232/accounts/get-token/", credentials).pipe(
    map((data) => { 
      localStorage.setItem('token', data.access);
      this.isLoggedInSubject.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }),
    catchError((error) => {
      const errorMessage = 'Username and Password did not match.';
      console.error(errorMessage, error.message);
      return of(false);
    })
   ) 
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token') ?? '';
    return !this.jwtHelper.isTokenExpired(token);
  }

  redirectToLogin(redirectUrl: string): UrlTree{
    return this.router.createUrlTree(['/auth'], { queryParams: {redirectUrl}});
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/auth']);
  }
}
