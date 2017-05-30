import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll/poll.service';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  	user: any;
	polls: Array<any>
  constructor(
  	private _pollService: PollService,
    private _dashboardService: DashboardService,
    private _router: Router) { }

  ngOnInit() {
  	this.getPolls();
  }
  getPolls(){
  	this._pollService.getPolls()
  	.then( (polls) => this.polls = polls)
  	.catch( (response) => console.log(response) )
  }
  deletePoll(id){
    this._pollService.deletePoll(id)
    .then( (poll) => this.getPolls())
    .catch( err => alert(err))
  }
  getCurrentUser(){
    this._dashboardService.getCurrent()
      .then( (user) => this.user = user)
      .catch((err) => this._router.navigate(['/index']))
  }
}
