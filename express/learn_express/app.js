const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv')
const path = require('path');

dotenv.config();//.env file을 process.env파일로 만듬
const app = express();
app.set('port',process.env.PORT || 3000);

app.use(morgan('combined'));//console 에 응답 상태 정보 표시
app.use(express.static(__dirname+"/"+"public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave:false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure: false,
  },
  name:'session-cookie'
}));


app.use((req,res,next) => {
  console.log('excute all requests');
  next();
})

app.use((req,res,next) => {
  console.log("process all request");
  next();
});

app.get('/',(req,res,next) => {
  //res.sendFile(path.join(__dirname,'/index.html'));
  console.log("process only get method");
  next();
},(req,res) => {throw new Error("error process middleware")});

app.use((err,req,res,next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'),()=>{console.log(app.get('port'),' ready')});
