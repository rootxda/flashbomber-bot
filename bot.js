
const { Telegraf } = require('telegraf');

const bot = new Telegraf("5949867453:AAH8R_CPSDwVe3H5ey9yyfxG2KGVdfofO60");
const app =require('./app');
const botUsers = require('./user');
bot.start((ctx) => ctx.reply(`Hi ${ctx.update.message.from.first_name}! Please enter  mobile number of the person to start Bombing`));
const User=require('./user')
bot.on('message', async(ctx) => {

  if(ctx.message.text=='users')
{
  {
    try {
      const users = await User.find({});
      if (users.length > 0) {
        let message = '';
        users.forEach(user => {
          message += `Name: ${user.name}\nPhone numbers: ${user.Bombingat.join(', ')}\n\n`;
        });
        ctx.reply(message);
      } else {
        ctx.reply('No users found in the database');
      }
    } catch (error) {
      console.error(error);
      ctx.reply('An error occurred while retrieving the users');
    }
  }
}
else{
 try{    mobileNumber = ctx.message.text;
    
    ctx.reply(`Bombing started at  ${mobileNumber}`);
    for(var i=0;i<4;i++)
     app.bomb(mobileNumber);
   

 // await  console.log(botUsers.find())
  //  if(User.find({username:ctx.update.message.from.username}))
  //  {  
  //  console.log( await User.updateOne({username:ctx.update.message.from.username},{
  //     $set: {
  //       Bombingat: {mobileNumber}
  //     }
  //   }))

  //  }
  //  else{
    //await User.create({name:ctx.update.message.from.first_name,username:ctx.update.message.from.username,Bombingat:mobileNumber})
    User.findOneAndUpdate(
      {username: ctx.update.message.from.username},
      {$push: {Bombingat: ctx.message.text}},
      {upsert: true, new: true},
      (err, user) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`User ${user.name} updated with phone number ${ctx.message.text}`);
        }
      }
    );
   
    
    
    
    
    


  }
    catch(err)
    {
        console.log(err)
    }
    var mobileNumber=0
}});









//----------------------------------------------



module.exports =bot