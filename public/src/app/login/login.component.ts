import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  	private _loginService: LoginService,
  	private _router: Router) { }

  ngOnInit() {
  }

  login(formData){
  	this._loginService.login(formData.value)
  		.then( (user) => this._router.navigate(['dashboard']))
  		.catch( (err) => console.log(err))
  }

}
