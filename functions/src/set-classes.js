const functions = require('firebase-functions');

const admin = require('firebase-admin');

const fs = admin.firestore();

const responseHeaders = {'Access-Control-Allow-Origin': '*', 'PW-Mini-Version': '10.5.0', 'content-type':'application/json'};

module.exports = functions.https.onRequest(async (request, response) => {
  if (request.method === 'POST') {
    let body = JSON.parse(request.rawBody.toString());
    console.log(JSON.stringify(body));

    // Check for required properties
    if (!body.classes) {
      response.writeHead(400, responseHeaders);
      response.end(JSON.stringify({success: false, error: 'Missing Class'}));
      return;
    } else if (!body.user) {
      response.writeHead(400, responseHeaders);
      response.end(JSON.stringify({success: false, error: 'Missing Class'}));
      return;
    }

    // Set User in Database
    const users = fs.collection('users');
    await users.doc(body.user).set({
      classes: body.classes
    }, { merge: true });

    // Send Response
    response.writeHead(200, responseHeaders);
    response.end(JSON.stringify({success: true}));
  } else {
    response.writeHead(200, responseHeaders);
    response.end(JSON.stringify({success: false, error: 'POST request must be used', method: request.method}));
  }
});