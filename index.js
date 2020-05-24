const express=require('express');
const path=require('path');
const port=8000;
const db=require("./config/mongoose");
const Contact=require('./models/contact')
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.get('/',function(req,res){
    Contact.find({},function(err,data)
    {
        if(err)
        console.log(err);
        res.render('home',{Pussy:data});

    })
    
});
app.post('/yo',function(req,res)
{
    Contact.create({
        "name":req.body.name,
        "phone":req.body.phone
    },function(err)
    {
        if(err)
        console.log(err);
        console.log("*****success");
    })
    res.redirect('/');
})
app.get('/delete',function(req,res){
    let id=req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err)
        console.log(err);
        res.redirect('back')

    })
})
app.post('/clear',function(req,res)
{
   Contact.collection.drop();
    res.redirect('/');
})
app.listen(port,function(err){
    if(err)
    console.log(err);
})