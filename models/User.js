const {Schema, model, Types} = require('mongoose')
const schema = Schema({
  id: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  ads: [{ type: Types.ObjectId, ref: 'Ads' }]
})

module.exports = model('User', schema)