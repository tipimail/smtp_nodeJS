//install nodemailer before
var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
	host: 'smtp.tipimail.com',
	port: 25,
	auth: {
    		user: 'your Tipimail username',
    		pass: 'one of your Api keys'
	}
});

transport.sendMail({
	from: 'from@tipimail.com',
  	to: 'recipient1@tipimail.com',
  	subject: 'send with Tipimail and nodejs',
  	html: 'version html',
}, function(err, message) { console.log(err || message); });

transport.close();
