import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private _http:Http) { }
  
  getCurrent(){
  	return this._http.get('/api/current')
  		.map( (user:Response) => user.json())
  		.toPromise()
  }

}