var router = require('express').Router();

function index(req, res) {
    res.render('./index');
}

router.get('/', index);
