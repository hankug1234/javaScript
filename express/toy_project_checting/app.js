const express = require('express');
const cookieParser  = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');


dotenv.config();
const pageRouter = require("./routes/page.js");
const database = require("./models/");
const passportConfig = require("./passport");

app = express();
passportConfig();
app.set('port',process.env.PORT | 3003);
app.set('view engine','html');
nunjucks.configure('views',{express: app, watch:true});

database.sequelize.sync({force:fasle})
.then(()=>{console.log("databases connection success");})
.catch((err)=>{console.error(err);})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,"public")));
app.use('/img',express.static(path.join(__dirname,'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false,
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',pageRouter);
app.use('/post',postRouter);
app.use('/user',userRouter);

app.use((req,res,next)=>{
  const error = new Error(`${req.method} ${req.url} no router`);
  error.status = 404;
  next(error);
});

app.use((err,req,res,next)=>{
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'projection' ? err : {};
  res.status(error.status | 500);
  res.render('error');
})

app.listen(app.get('port'),()=>{console.log(app.get('port','ready'))});
