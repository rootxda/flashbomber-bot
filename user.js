const mongoose = require("mongoose");

const botusersSchema = new mongoose.Schema({
  name: {
    type: String,
     unique:false
  },
  username: {
    type: String,
    unique:false
    
  },
  
  Bombingat: {type: [Number]}
  
});

const botUsers = mongoose.model("botUsers", botusersSchema);

module.exports = botUsers;