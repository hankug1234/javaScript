const form = document.getElementById('form')
document.getElementById('form').addEventListener('submit',async(e) => {
  e.preventDefault();
  const name = e.target.username.value;
  if(!name){
    return alert('input your name');
  }
  try{
    await axios.post('http://localhost:8083/javaScript/html/restFront/test_server.js',{name});
    getUser();
  }catch(err){
    console.error(err);
  }
  e.target.username.value = '';
});
