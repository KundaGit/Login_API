import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:Login
  constructor(private http:HttpClient,private router:Router){
    this.loginObj=new Login()
  }
  onLogin(){
    
this.http.post('https://api.freeprojectapi.com/api/UserApp/login',this.loginObj).subscribe((res:any)=>{
  if(res.result){
    alert("Login Success")
    localStorage.setItem("token",res.data.token) 
    this.router.navigateByUrl("/dashboard")
  }else{
    alert(res.message)
  }
})
    console.log("hello world")
  }
}

export class Login{
  EmailId:string;
  Password:string;
  constructor(){
    this.EmailId="";
    this.Password=""
  }
}
