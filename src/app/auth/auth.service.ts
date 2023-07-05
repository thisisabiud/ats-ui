import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from './credentials';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, UrlTree } from '@angular/router';
// import jwt_decode from 'jsonwebtoken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  loginError: boolean = false;
  public username?: any;
  static uname: string;


  
  
  constructor( private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {
    const token = localStorage.getItem('token');
    // this.getCurrentUserId();
    this.http.get<any>('http://45.79.31.232/accounts/profile').subscribe(data => {
      this.username = data['user']['username'];
      AuthService.uname = this.username;
    
    }
      
      )}; 
    
   

  //  getCurrentUserId(): any{
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     this.userId = new JwtHelperService().decodeToken(token)["user_id"];
  //     // console.log(decoded);
  //   }
  //  }

  getProfile(): Observable<any>{
    return this.http.get<any>('http://45.79.31.232/accounts/profile');
  }

  static get userProfName(): string{
    return this.uname;
  }


  authUrl = `${environment.baseUrl} + /accounts/get-token/`;

  login$(credentials: Credentials){
   return this.http.post<any>("http://45.79.31.232/accounts/get-token/", credentials).pipe(
    map((data) => { 
      localStorage.setItem('token', data.access);
      this.isLoggedInSubject.next(true);
      this.router.navigate(['/dashboard']);
      this.loginError = false;
      return true;
    }),
    catchError((error) => {
      const errorMessage = 'Username and Password did not match.';
      console.error(errorMessage, error.message);
      this.loginError = true;
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
