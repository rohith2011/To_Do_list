const express = require("express");
const bodyParser= require("body-parser");

const app= express();
var newadd;
var items=[];
var work=[];
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static("views"));

app.get("/",function(req,res){

    var today= new Date();
    var options={
        weekday: "long",
        day : "numeric",
        month: "long"
    };

    var day =today.toLocaleDateString("en-US",options);
    
    res.render("list",{
        title:day,
        newiteminlist:items
    });
})

app.post("/",function(req,res){

    newadd= req.body.addtext;
    //console.log(req.body.button);
    if(req.body.button === "Work")
    {
        work.push(newadd);
        res.redirect("/work");
    }
    else
    {
        items.push(newadd);
        res.redirect("/");
    }
})



app.get("/work",function(req,res){
    res.render("list",{
        title:"Work",
        newiteminlist:work
    })
})

app.listen(3000,function(){
    console.log("Server is running on 3000!!!");
})