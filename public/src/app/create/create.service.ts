import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class CreateService {

  constructor(private _http:Http) { }
  createPoll(poll){
  	console.log("In the service", poll)
  	return this._http.post('/api/polls', poll)
  		.map( (polls:Response) => polls.json())
  		.toPromise()
  }
}
