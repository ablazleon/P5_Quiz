var express = require('express');
var router = express.Router();

const quizCtrl = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET credits. */
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Autores' });
});

/* GET quizzes. */
router.get('/quizzes', quizCtrl.index);

module.exports = router;
