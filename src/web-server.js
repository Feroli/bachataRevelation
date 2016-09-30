'use strict';

let express = require('express');

let port = process.env.PORT || 5000;

let path = require('path');
let app = express();
let rootPath = path.normalize(__dirname + '/../');
let bodyParser = require('body-parser');

// for seo purposes
app.use(require('prerender-node'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/public'));
app.use('/bower_components', express.static(__dirname + '/../public/lib/'));

app.get('*', function(req, res) {
    res.sendFile(rootPath + '/public/index.html');
});

app.listen(port, function(err) {
    if (err) {
        console.log('There was an error creating the system');
    }
    console.log('running server on port ' + port);
});
