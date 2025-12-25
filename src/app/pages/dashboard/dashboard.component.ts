import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  users:any[]=[];
constructor(private http:HttpClient){
}

ngOnInit(): void{
this.getAllUsers();
}
getAllUsers(){
  this.http.get('https://api.freeprojectapi.com/api/UserApp/GetAllusers').subscribe((res:any)=>{
    this.users=res.data
    console.log(res)
  },error=>{
// alert("Something went wrong")
  })
}
}
