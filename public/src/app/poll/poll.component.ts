import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PollService } from './poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
	poll_id: String;
	poll;
  vote: String;
  constructor(private _route: ActivatedRoute,
  	private _pollService: PollService,
  	private router: Router) { }

  ngOnInit() {
  	  this._route.params.subscribe((param)=>{
      this.poll_id = param.id;
    })

  	this.getPoll(this.poll_id);
  }
  getPoll(id){
  	this._pollService.getPoll(id)
  		.then( poll => this.poll = poll)
  		.catch( err => console.log(err))
  }
  addVoteOne(id){
    console.log("in component!", id)
    this._pollService.addVoteOne(id)
      .then( (vote) => location.reload())
      .catch((err) => console.log(err))
  }
  addVoteTwo(id){
    console.log("in component!", id)
    this._pollService.addVoteTwo(id)
      .then( (vote) => location.reload())
      .catch((err) => console.log(err))
  }
  addVoteThree(id){
    console.log("in component!", id)
    this._pollService.addVoteThree(id)
      .then( (vote) => location.reload())
      .catch((err) => console.log(err))
  }
  addVoteFour(id){
    console.log("in component!", id)
    this._pollService.addVoteFour(id)
      .then( (vote) => location.reload())
      .catch((err) => console.log(err))
  }
}
