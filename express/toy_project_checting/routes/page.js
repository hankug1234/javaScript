const express = require('express');

const router = express.Router();

router.use((req,res,next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.get('/profile',(req,res) => { res.render('profile',{title:'my info - checting'})});

router.get('/join',(req,res)=>{res.render('join',{title:'sign in - checting'})});

router.get('/',(req,res,next)=>{const twits = []; res.render('main',{title:'CHECTING', twits})});

module.exports = router;
