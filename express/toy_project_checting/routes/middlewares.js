exports.isLoggedIn = (req,res,next) => {
  if(req.isAuthenticated()){
    next();
  } else{
    res.status(403).send('require loggin');
  }
};

exports.isNotLoggedIn = (req,res,next) => {
  if(!req.isAuthenticated()){
    next();
  } else{
    const message = encodeURIComponent('is loggin state');
    res.redirect(`/?error=${message}`);
  }
}
