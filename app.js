const express = require('express');
const app = express();

SEVERPORT = 3000

function initApp() {
    app.set('view engine', 'pug');
    app.use(express.static('public'));
    app.use('/', require('./route.js'));
      
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
      });
}

initApp();


