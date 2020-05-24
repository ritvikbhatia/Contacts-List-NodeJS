const express=require('express');
const path=require('path');
const port=8000;
const db=require("./config/mongoose");
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var pussy=[{"name":"honey","phone":9},{"name":"yoyo","phone":98}]
app.get('/',function(req,res){
    res.render('home',{Pussy:pussy});
});
app.post('/yo',function(req,res)
{
    pussy.push(req.body);
    res.redirect('/');
})
app.post('/clear',function(req,res)
{
    pussy=[];
    res.redirect('/');
})
app.listen(port,function(err){
    if(err)
    console.log(err);
})