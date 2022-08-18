async function getUser(){
  try{
    const res = await axios.get('http://localhost:8082/users');
    const users = res.data;
    const list = document.getElementById('list');
    list.innerHTML = '';
    Object.keys(users).map(function(key){
      const userDiv = document.createElement('div');
      const span = document.createElement('span');
      span.textContent = users[key];
      const edit = document.createElement('button');
      edit.textContent = 'modify';
      edit.addEventListener('click',async () => {
        const name = prompt("input your name");
        if(!name){
          return alert("you must input your name");
        }
        try{
          await axios.put('http://localhost:8082/user/'+key,{name});
          getUser();
        }
        catch(err){
          console.error(err);
        }
      });
      const remove = document.createElement('button');
      remove.textContent = 'remove';
      remove.addEventListener('click',async()=>{
        try{
          await axios.delete('http://localhost:8082/user/'+key);
          getUser();
        } catch(err){
          console.error(err);
        }
      });
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });
  } catch(err){
    console.error(err);
  }
}

window.onload = getUser;
document.getElementById('form').addEventListener('submit',async(e) => {
  e.preventDefault();
  const name = e.target.username.value;
  if(!name){
    return alert('input your name');
  }
  try{
    await axios.post('http://localhost:8082/user',{name});
    getUser();
  }catch(err){
    console.error(err);
  }
  e.target.username.value = '';
});
