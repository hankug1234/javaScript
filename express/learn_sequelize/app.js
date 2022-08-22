const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const {sequelize} = require("D://javaScript/express/models");

const app = express();
app.set('port',process.env.PORT| 3001);
app.set('view engine','html');
nunjucks.configure('views',{express:app, watch:true,});

sequelize.sync({force:false})
.then(()=>{console.log('database connection success');})
.catch((err)=>{console.error(err);})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
  const error = new Error(`${req.method} ${req.url} no router`);
  error.status = 404;
  next(error);
});

app.use((err,req,res,next)=>{
  res.locals.message  = err.message;
  res.locals.error = process.evn_NODE_ENV !== 'production' ? err : {};
  res.render('error');
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'),'ready');
});
