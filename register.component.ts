import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EndpointsService } from '../endpoints.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  error: any;
  isLoading:boolean;
  log(x){console.log(x)}



  constructor(public ep:EndpointsService) { }
  register: any;

  ngOnInit(): void {
  }

  addEmployee(employee){
    this.isLoading = true;
    this.ep.createEmployee(employee.value).subscribe(res=>{
      employee.reset();
      this.isLoading = false;
      // if(!res.error){
      //   this.message="Emplyoee Registered Successfully!!!"
      // }
      // else{
      //   this.error="Emplyoee Not Registered"
      // }
    },err=>{
      console.log(err);
      this.error="server error"
    })
  }

}


