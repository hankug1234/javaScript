const express = require('express');

const {LoggedIn} = require("./middlewares");
const User = require('../models/user');

const router = express.Router();

router.post('/:id/follow', isLoggeIn, async(req,res,next) => {
  try{
    const user = await User.findOne({where:{id:req.user.id}});
    if(user){
      await user.addFollowing(parseInt(req.params.id,10));
      res.send('success');
    } else{
      res.status(404).send('no user');
    }
  }
  catch(error){
    console.error(error);
    next(error);
  }
});

modul.exports = router
