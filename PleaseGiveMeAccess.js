/*

  # NODE JS script :
  # Send a mail with a query regulary to ask somethings
  # TODO : add a joke at the end of the mail to be pleasent

*/

var http        = require("http"),
    nodemailer  = require("nodemailer"),
    d           = new Date();


// Check if their is a personal setting if it's not the case take the default one 
try{
  var setting     = require("./setting.js")
} catch(e) {
  var setting     = require("./defaultSettings.js")
}

var smtpTransport = nodemailer.createTransport(setting.protocol.protocol,{
    service: setting.protocol.service,
    auth: {
          user: setting.protocol.user,
          pass: setting.protocol.pass
      }
});

function mailOptions (setting){
  var content = textComposer(setting)
  var options = {
    from:     setting.from.subname+" "+setting.from.name+" <"+setting.from.mail+">", // sender address
    to:       setting.to.mail,            // list of receivers
    subject:  randArray(setting.subject), // Subject 
    text:     content,      // message 
    html:     content
    }
  return options
}

function textComposer(setting){
  var myMail = randArray(setting.header)+"<br><br>"
      myMail += randArray(setting.message)+"<br><br>"
      myMail += randArray(setting.thanks)+"<br><br><br><br>"
      myMail += randArray(setting.footer)
  return myMail
}

function randArray (myArray){
  return myArray[(Math.round(Math.random()*(setting.subject.length-1)))]
}

function sendMail(option){
  console.log("ICI");
  if(typeof(option)==undefined){
    option=mailOptions()
  }
  smtpTransport.sendMail(option, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }
      smtpTransport.close(); 
  });
}

function mailWriter(setting){
  var mail = mailOptions(setting)
  console.log(mail)
  sendMail(mail)
}

console.log("Start the process at "+d)
/* var timer = setInterval(function(){
                          mailWriter(setting)
                        },setting.frequency);
*/
mailWriter(setting)
// # Use forever for daemon
// https://github.com/nodejitsu/forever
// forever start PleaseGiveMeAccess.js 

