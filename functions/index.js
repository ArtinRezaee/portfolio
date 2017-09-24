const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {

    const snapshot = event.data;
  // Only send email for new messages.
    if (snapshot.previous.val() || !snapshot.val().name) {
      return;
    }
    
    const val = snapshot.val();
    
    const mailOptions = {
      from: val.email,
      to: 'artin.anzabee@gmail.com',
      subject: `Message from ${val.name}`,
      text: `Email from : ${val.email}\n` + val.message,
      html: val.html
    };

    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('Mail sent to: test@example.com')
    });
  });



exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    admin.database().ref('/messages').push({original: original}).then(snapshot => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      res.redirect(303, snapshot.ref);
    });
  });
  