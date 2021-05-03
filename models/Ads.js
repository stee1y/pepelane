const {Schema, model, Types} = require('mongoose')
const schema = Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  description: {type: String, required: true},
  specifications_text: {type: String},
  team_text: {type: String},
  rent: {type: Number, required: true},
  preview: {type: String, required: true},
  image: {type: String, required: true},
  date: {type: Date, default: Date.now},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Link', schema)