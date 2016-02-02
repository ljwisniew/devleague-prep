/*====== INCLUDE EXTERNAL MODULES ======*/

// N.B. 'require' is a built in Node.js Function that
// imports things from node_modules

// Module that can be used as a function to create a server
var express = require('express');

// Module for resolving file system paths regardless of operating system
var path = require('path');


/*====== CREATE SERVER ======*/

var app = express();


/*====== SET UP REQUEST HANDLERS ======*/

// Handler #1: Tell server to serve files from our public directory
// (If the file cannot be found in the public dir, this fails)

// Get the full file system path to our public directory
// N.B. __dirname is the directory containing this file
var publicDirPath = path.resolve(__dirname, 'public');

// N.B. express.static is a method that creates a request handler to serve files
// from the directory given as an arguement
var publicDirRequestHandler = express.static(publicDirPath);

app.use(publicDirRequestHandler);


// Handler #2: Tell the server to report a 404 File Not Found error
// (It tries the handlers in order, if Handler #1 succeeds, this is not used)

function fileNotFoundRequestHandler(req, res) {
  var msg = 'Unrecognized request path: ' + req.url;
  console.log(msg);
  res.status(404).send(msg);
}

app.use(fileNotFoundRequestHandler);


/*====== START SERVER ======*/

// This will use a number passed in from the command line if given,
// otherwise it defaults to 9002
var port = process.argv[2] || 9002;

app.listen(port, function() {
  console.log('Server listening at http://localhost:' + port);
});
