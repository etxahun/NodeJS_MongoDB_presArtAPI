var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presionSchema = new Schema({
	alta: Number,
	baja: Number,
	pulsaciones: Number,
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PresionArterial', presionSchema);
