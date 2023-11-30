const express=require('express');
const path=require('path');
const app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://Dancing');
const port=3000;


const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  const contact = mongoose.model('contact', contactSchema);
//express related

app.use('/static',express.static('static'))//for serving static files
app.use(express.urlencoded())

//pug content

app.set('view engine','pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))//set the views directory


//endpoints
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params);
})

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});