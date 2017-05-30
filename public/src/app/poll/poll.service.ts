import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class PollService {
  poll;
  constructor(private _http:Http) { }
  getPolls(){
  	return this._http.get('/api/polls')
  	.map( (polls) => polls.json())
  	.toPromise();
  }
  getPoll(id){
  	return this._http.get('/api/polls/' + id).map( (poll: Response) => poll.json() ).toPromise()
  }
  addVoteOne(id){
    console.log("in service",id)
    return this._http.get('/api/polls/'+id+'/votes')
  		.map( (response:Response) => response.json())
  		.toPromise()
  }
  addVoteTwo(id){
  	console.log("in service",id)
  	return this._http.get('/api/polls/'+id+'/votesTwo')
  	.map( (response:Response) => response.json())
  	.toPromise()
  }
  addVoteThree(id){
    console.log("in service",id)
    return this._http.get('/api/polls/'+id+'/votesThree')
  		.map( (response:Response) => response.json())
  		.toPromise()
  }
  addVoteFour(id){
    console.log("in service",id)
    return this._http.get('/api/polls/'+id+'/votesFour')
  		.map( (response:Response) => response.json())
  		.toPromise()
  }
  deletePoll(id){
    return this._http.delete('/api/polls/' + id)
    .map( (poll: Response) => poll.json() )
    .toPromise()
  }
}
