const express=require('express');
const bodyParser=require('body-parser');
// const request=require('request');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=["Book Food","Cook Food","Eat Food"];
var workItems=[];
app.set('view engine','ejs');

app.get('/', function(req,res){

	var today=new Date();
	var currentDay =today.getDay();
	var day="";


var options={
weekday:"long",
day:"numeric",
month:"long"

};

var day=today.toLocaleDateString("en-US", options)

	res.render('list',{ listTitle: day, newlistItems: items });

});


app.post('/',function(req,res){

  var item=req.body.newItem;

if(req.body.list ==="Work"){

	workItems.push(item);
	 res.redirect("/work");
}
else{
 items.push(item);
}

 
  console.log(item);
  res.redirect("/");

});

app.get('/work',function(req,res){
     res.render("list",{listTitle: "Work List", newlistItems:workItems});
});

app.post('/work',function(req,res){
		let item=res.body.newItem;
		workItems.push(item);
		res.redirect('/work');
     });

// PORT=3000;
app.listen(3000,function(){
	console.log("Server is Running in 3000");
});