require('dotenv').config();
const express=require("express") ;
const ejs =require("ejs") ;
const bodyParser = require("body-parser") ;
const mongoose=require("mongoose") ;

const app=express() ;
app.set('view engine','ejs')
app.use(express.static("public")) ;
app.use(bodyParser.urlencoded({extended:true})) ;

mongoose.connect(process.env.MONGODB_URI) ;


const now = new Date();
const date_time = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).format(now);

const contactSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    mobile:String,
    country:String,
    city:String,
    anything:String,
    time:String
}) ;

const contacts=mongoose.model("contacts",contactSchema);

// const c = new contacts({
//     first_name:"kirtan",
//     last_name:"trhrth",
//     email:"vbd",
//     mobile:"rety",
//     country:"dfhg",
//     city:"ghj",
//     anything:"asdf",
//     time:date_time
// }) ;
// c.save() ;

app.get('/contact',(req,res)=>{
    res.render("contact") ;
})

app.post('/contact',(req,res)=>{
    var saved_first_name=req.body.first_name; 
    var saved_last_name=req.body.last_name; 
   const contact=new contacts({
  first_name: saved_first_name,
  last_name:saved_last_name,
   email:req.body.email,
   mobile:req.body.mobile,
   country:req.body.country,
   city:req.body.city,
   anything:req.body.anything,
   time:date_time
  });
  contact.save().then(()=>console.log("New contact added")) ;
  res.render("contact_success",{
    first_name:saved_first_name,
    last_name:saved_last_name 
  }) ;
})

async function trying() {
  const cry = await contacts.find() ;
 return cry ;
}


app.get("/100cr", async function(req,res){
  console.log("data is been seen")
  const a =await trying() ;
  let time = [] ;
  let first_name = [];
  let last_name = [];
  let email = [];
  let mobile = [];
  let country = [];
  let city = [];
  let anything = [];
  let id =[] ;
  
  
  for (var i = 0; i < a.length; i++) {
      time.push(a[i].time)
      // console.log(a[i].first_name);
      first_name.push(a[i].first_name);
  
      // console.log(a[i].last_name);
      last_name.push(a[i].last_name);
  
      // console.log(a[i].email);
      email.push(a[i].email);
  
      // console.log(a[i].mobile);
      mobile.push(a[i].mobile);
  
      // console.log(a[i].country);
      country.push(a[i].country);
  
      // console.log(a[i].city);
      city.push(a[i].city);
  
      // console.log(a[i].anything);
      anything.push(a[i].anything);

      id.push(a[i]._id) ;

      
  }
  
  // console.log("First Names:", first_name);
  // console.log("Last Names:", last_name);
  // console.log("Emails:", email);
  // console.log("Mobile Numbers:", mobile);
  // console.log("Countries:", country);
  // console.log("Cities:", city);
  // console.log("Anything:", anything);
  
  res.render("contact_data",{id:id,time:time,first_name:first_name,last_name:last_name,email:email,mobile:mobile,country:country,mobile:mobile,city:city,anything:anything}) ;

}) ;

app.get("/",(req,res)=>{
    res.render('index') ;
})

app.listen(process.env.port || 8080,function(){
    console.log("server is runninh at port 3000") ;
})




// BlFddqPaPjSjvG3D