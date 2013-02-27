PleaseGiveMeAcessTo
===================

API for human request : A little script to query regularly something you need but no API exist.


## Installing

* Download the latest.
* Congigure it 
* run PleaseGiveMeAccess.js

## Configuration 

You can change the sender, receiver, template mail on the (root setting json file :
https://github.com/fabelier/PleaseGiveMeAcessTo/blob/master/defaultSettings.js

Each footer, header, and message are shuffeling before sending.

## Running 

To run it as a daemon you could use forever

  forever start PleaseGiveMeAccess.js
  
## Dependencies

nodemailer, a simple mailer for node

  npm install nodemailer 
