import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  phone=""
  gender=""
  email=""
  address=""
  pincode=""
  bloodgroup=""
  dob=""
  age=""
  parentname=""
  username=""
  password=""
  confirmpassword=""


  readValue=()=>{
    let data={
      "name":this.name,
      "phone":this.phone,
      "gender":this.gender,
      "email":this.email,
      "address":this.address,
      "pincode":this.pincode,
      "bloodgroup":this.bloodgroup,
      "dob":this.dob,
      "age":this.age,
      "username":this.username,
      "parentname":this.parentname,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
   
    alert("successfully added")
    this.name=""
    this.phone=""
    this.gender=""
    this.email=""
    this.address=""
    this.pincode=""
    this.bloodgroup=""
    this.dob=""
    this.age=""
    this.username=""
    this.parentname=""
    this.password=""
    this.confirmpassword=""

  }
  

  ngOnInit(): void {
  }

}
