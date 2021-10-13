import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router ) { }

  createEmployee(creat: any){
    return this.http.post('http://localhost:1996/api/register',creat)
  }
  loginUser(credentials){
    return this.http.post<any>('http://localhost:1996/api/login',credentials)
  }
}
