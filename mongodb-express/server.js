var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017/users";
var users;


app.get('/',function(req,res){
 res.send('Hello Express !!');
});

//GET/users
app.get('/users',function(req,res){
 users.find({name:'Haider Malik'}).toArray(function(err,users){
   if(err) res.status(404).send();
  else if(users.length){
  	res.json(users);
  }else{
  	res.status(500).send();
  }

 });

});

app.listen(PORT,function(){
	MongoClient.connect(url,function(err,mydb){
     if(!err){
     users=mydb.collection('users');

     console.log('Connection Established');
 }else{
 	console.log('Unable to connect with Db '+err);
 }
	});
	console.log('Express is Listening on PORT '+PORT);
});