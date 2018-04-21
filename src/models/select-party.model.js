// select-party-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const selectParty = new Schema({
    partyName:{
      type: String,
      required: true
    },
    score:{
      type: Number,
      default: 0
    },
    qoute:{
      type: String,
    },
    userSelected:{
      type: Array
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('selectParty', selectParty);
};
