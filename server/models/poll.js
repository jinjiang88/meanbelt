let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PollSchema = new Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	question: {type: String, minlength: 8, required: [true, "Question must be at least 8 characters!"]},
	optionOne: {type: String, minlength: 3, required: [true, "Option 1 must be at least 3 characters!"]},
	optionTwo: {type: String, minlength: 3, required: [true, "Option 2 must be at least 3 characters!"]},
	optionThree: {type: String, minlength: 3, required: [true, "Option 3 must be at least 3 characters!"]},
	optionFour: {type: String, minlength: 3, required: [true, "Option 4 must be at least 3 characters!"]},
	voteOne: {type: Number, required: false, default: 0,},
	voteTwo: {type: Number, required: false, default: 0,},
	voteThree: {type: Number, required: false, default: 0,},
	voteFour: {type: Number, required: false, default: 0,},

}, {timestamps: true})

mongoose.model('Poll', PollSchema);