const express = require('express');
const multy = require('multer');
const path = require('path');

app = express();
app.set('port',process.env.PORT | 3001);

const upload = multy({
  storage: multy.diskStorage({
    destination(req,file,done){
      done(null,"public/");
    },
    filename(req,file,done){
      ext = path.extname(file.originalname);
      name = path.basename(file.originalname,ext);
      done(null,name + Date.now + ext);
    },
  }),
  limits:{fileSize:5*1024*1024},
});

app.get('/upload',(req,res)=>{
  res.sendFile(path.join(__dirname,"/multy_form.html"));
});

app.post('/upload',upload.single('image'),(req,res) => {
  console.log(req.body,req.file);
  res.status(200);
  res.send('ok');
});

app.listen(app.get('port'),()=>{console.log(app.get('port')," ready")});
