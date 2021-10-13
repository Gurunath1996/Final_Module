import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  error:string;
  isLoading = false;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm:NgForm){
    // this.isLoading = true;
    this.auth.loginUser(loginForm.value).subscribe(res => {
      if(!res.error){
        console.log(res);

        // this.isLoading = false;
        // localStorage.setItem("creat",JSON.stringify(res))
       this.router.navigate(['/admin-page'])
      }
      else{
        this.error = 'Login failed'
        this.isLoading = false;
      }
    },err => {
      this.error = 'Server Error..Cannot Login'
    })
  }

}
