const app = require("./app.js")
const bot = require('./bot')
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
const mongoose = require("mongoose");
const db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);


console.log(db);
mongoose.connect(db, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

bot.launch();