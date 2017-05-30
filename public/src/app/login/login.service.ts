import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class LoginService {

  constructor(private _http:Http) { }

  login(user){
  	console.log(user)
  	return this._http.post('/api/login', user)
  		.map( (response: Response)=> response.json())
  		.toPromise();
  }
}
