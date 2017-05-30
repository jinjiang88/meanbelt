var mongoose = require('mongoose');
var User = mongoose.model("User")
var Poll = mongoose.model("Poll")
mongoose.promise = Promise

module.exports = {
	loginReg: (req, res) => {
		console.log("im in controller", req.body.name)
		User.findOne({name: req.body.name}, (err, user)=>{
			if(user == null){
				let newUser = new User(req.body);
				newUser.save( (err, savedUser) => {
					if(err){
						console.log(err);
						return res.sendStatus(500);
					}else{
						req.session.user = savedUser;
						return res.json(savedUser);
					}
				})
			}else{
				req.session.user = user;
				return res.json(user)
			}
		})
	},
	createPolls: (req, res) => {
		if(!req.session.user){
			return res.status(401).send("Please log in!");
		}else{
			let poll = new Poll(req.body);
			poll._user = req.session.user._id;
			poll.save((err, newPoll) => {
				if(err){
					let errors = ""
					for(let i in err.errors){
						errors += err.errors[i].message + ","
					}
					return res.status(500).send(errors)
				}else{
					console.log("in controller", newPoll);
					res.json(newPoll);
				}
			})
		}
	},
	getPolls: (req, res) => {
		Poll.find({}).populate('_user').exec( (err, polls) => {
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				return res.json(polls);
			}
		})
	},
	getPoll: (req, res) => {
		console.log("*************************", req.params.id)
		Poll.findOne({_id: req.params.id}, (err, poll) => {
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				return res.json(poll);
			}
		})
	},
	addVoteOne: (req, res) => {
		Poll.findOne({_id: req.params.poll_id},(err, poll)=>{ 
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				poll.voteOne++
				poll.save((err, savedVotes)=>{
							if(err){
								console.log(err);
								return;
							}
							return res.json(savedVotes);
				})
			}
		})
	},
	addVoteTwo: (req, res) => {
		Poll.findOne({_id: req.params.poll_id},(err, poll)=>{ 
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				poll.voteTwo++
				poll.save((err, savedVotes)=>{
							if(err){
								console.log(err);
								return;
							}
							return res.json(savedVotes);
				})
			}
		})
	},
	addVoteThree: (req, res) => {
		Poll.findOne({_id: req.params.poll_id},(err, poll)=>{ 
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				poll.voteThree++
				poll.save((err, savedVotes)=>{
							if(err){
								console.log(err);
								return;
							}
							return res.json(savedVotes);
				})
			}
		})
	},
	addVoteFour: (req, res) => {
		Poll.findOne({_id: req.params.poll_id},(err, poll)=>{ 
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				poll.voteFour++
				poll.save((err, savedVotes)=>{
							if(err){
								console.log(err);
								return;
							}
							return res.json(savedVotes);
				})
			}
		})
	},
	deletePoll: (req, res) => {
		Poll.remove({_id: req.params.id}, (err, poll) => {
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}else{
				return res.json(poll);
			}
		})
	},
	current: (req, res) => {
		if(!req.session.user){
			return res.status(401).send("Please log in!")
		}else{
			return res.json(req.session.user);
		}
	},

	logout: (req, res)=> {
		req.session.destroy();
		res.redirect('/')
	}
}