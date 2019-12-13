const express     = require("express"),
	  path		  = require("path"),
	  app         = express(),
      bodyParser  = require("body-parser"),
      flash       = require("connect-flash"),
	  exphbs	  = require("express-handlebars"),
	  nodemailer  = require("nodemailer");

// requiring routes
const indexRoutes = require('./routes/index.js');

const hostname = '127.0.0.1';
const port = 3000;
	
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use(indexRoutes);

app.post('/send', (req, res) => {
	const output = `
	<p>You have a new contact request:</p>
	<h3>Contact details</h3>
	<ul>
		<li>Name: ${req.body.name}</li>
		<li>Email: ${req.body.email}</li>
		<li>Phone Number: ${req.body.phone}</li>
	</ul>
	<h3>Message</h3>
	<h4>Subject: ${req.body.subject}</h4>
	<p>Message: ${req.body.message}</p>
	`;
	
	// async..await is not allowed in global scope, must use a wrapper
	async function main() {
	  // Generate test SMTP service account from ethereal.email
	  // Only needed if you don't have a real mail account for testing
	  let testAccount = await nodemailer.createTestAccount();

	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: 'kobe71@ethereal.email', // generated ethereal user
		  pass: 'aVACmc7TyqxpbhEzeE' // generated ethereal password
		}
	  });

	  // send mail with defined transport object
	  let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "rumleydev@gmail.com", // list of receivers
		subject: "Epic Electric Website Contact", // Subject line
		text: "", // plain text body
		html: output // html body
	  });

	  console.log("Message sent: %s", info.messageId);
	  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	  res.render('index', {layout: false})
	}

	main().catch(console.error);
});

app.listen(3000, () =>{
	console.log('server critical on port 3000');
});