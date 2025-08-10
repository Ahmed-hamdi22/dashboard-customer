 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const articleSchema = new Schema({
  userForm: String,

});
 


const Mydata = mongoose.model("Mydataa", articleSchema);
// export the model
module.exports = Article;