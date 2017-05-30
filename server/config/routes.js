var controller = require('../controllers/controller');

module.exports = app => {
	app.post('/api/login', controller.loginReg);
	app.get('/logout', controller.logout);
	app.post('/api/polls', controller.createPolls);
	app.get('/api/polls', controller.getPolls);
	app.get('/api/polls/:id', controller.getPoll);
	app.get('/api/polls/:poll_id/votes', controller.addVoteOne);
	app.get('/api/polls/:poll_id/votesTwo', controller.addVoteTwo);
	app.get('/api/polls/:poll_id/votesThree', controller.addVoteThree);
	app.get('/api/polls/:poll_id/votesFour', controller.addVoteFour);
	app.delete('/api/polls/:id', controller.deletePoll);
	app.get('/api/current', controller.current);
}