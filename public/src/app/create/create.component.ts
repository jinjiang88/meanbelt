import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	errors: any;
  constructor(
  	private _createService: CreateService,
  	private _router: Router) { }

  ngOnInit() {
  }
  createPoll(formData){
  	console.log("In the component", formData.value)
  	this._createService.createPoll(formData.value)
  		.then( (message)=> {
  			this._router.navigate(['/dashboard']);
  		})
  		.catch( (err) => this.errors = err._body.split(","))
  }

}
