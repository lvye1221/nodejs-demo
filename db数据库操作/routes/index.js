var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/movie/add', movie.movieAdd);//增加
router.post('/movie/add', movie.doMovieAdd);//提交
router.get('/movie/:name', movie.movieAdd);//编辑查询
router.get('/movie/json/:name', movie.movieJSON);//JSON数据

module.exports = router;
