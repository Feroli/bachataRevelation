'use strict';

let fs = require('fs');

module.exports.get = function(req, res) {
    console.log('over here');
    let event = fs.readFileSync('/Users/Feroli/sites/bachataRevelation/public/data/event/' +
     req.params.id + '.json', 'utf8');

    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

module.exports.save = function(req, res) {
    let event = req.body;
    fs.writeFileSync('/Users/Feroli/sites/bachataRevelation/public/data/event' + req.params.id +
     '.json', JSON.stringify(event));

    res.send(event);
};

module.exports.getAll = function(req, res) {
    let path = '/Users/Feroli/sites/bachataRevelation/public/data/event';

    let files = [];
    try {
        files = fs.readdirSync(path);
    } catch (e) {
        console.log(e);
        res.send('[]');
        res.end();
    }
    let results = '[';
    for (let idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf('.json') === files[idx].length - 5) {
            results += fs.readFileSync(path + '/' + files[idx]) + ',';
        }
    }
    results = results.substr(0, results.length - 1);
    results += ']';

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};
