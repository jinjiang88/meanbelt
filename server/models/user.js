let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: {type:String, required:[true, "Please enter name."] },
}, {timestamps: true})

mongoose.model('User', UserSchema);