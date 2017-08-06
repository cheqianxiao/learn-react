var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nannan";
var express = require('express')
var data = require('./src/data/momentslist.json').data
var app = express()
//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

var db;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db = db
  app.listen(3000, function () {
  console.log('Example app listening on port 8080!')
})
  db.createCollection("allmoments", function(err, res) {
    if (err) throw err;
    insertMoments(db)
    responseRequest(db)
  });
});

function insertMoments(db){
	db.collection("allmoments").insertMany(data, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
}
function responseRequest(db){
app.get('/api/allmoments', function (req, res) {
	res.json([{nickname: 1,profile_photo: 234,content: 23}])
  // db.collection("allmoments").find({}).toArray(function(err,result){
  // 	if (err) throw err;
  // 	console.log('请求过来了')
  //   res.json(result)
  // });
})	
}
