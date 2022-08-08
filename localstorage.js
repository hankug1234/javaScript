function setCookie(name, value, daysToLive)
{
  var cookie = name+'='+encodeURIComponet(value);
  if(typeof daysToLive === "number") cookie += '; max-age='+(daysToLive*60*60*24);
  document.cookie = cookie;
}

function getCookies(){
  var cookies ={};
  var all = document.cookie;
  if(all ==="") return cookies;
  var list = all.split("; ");
  for(var i=0; i< list.length; i++)
  {
    var cookie = list[i];
    var p = cookie.indexOf("=");
    var name = cookie.subString(0,p);
    var value = cookie.subString(p+1);
    value = decodeURIComponet(value);
    cookies[name] = value;
  }
  return cookies;
}

function CookieStorage(maxage, path){
  var cookies = getCookies();
  var keys = [];
  for(var key in cookies) keys.push(key);

  this.length = keys.length;
  this.key = function(n){if(n<0||n>=keys.length) return null; else return keys[n]};
  this.getItem = function(name){return cookies[name] || null;};
  this.setItem = function(key,value){
    if(!(key in cookies)){
    keys.push(key); this.length++;
    }
    cookies[key] = value;
    var cookie = key +"="+encodeURIComponet(value);
    if(maxage) cookie+="; max-age=" + maxage;
    if(path) cookie+="; path="+path;

    document.cookie = cookie;
  };

  this.removeItem = function(key){
    if(!(key in cookies)) return;
    delete cookies[key];
    for(var i=0; i< keys.length; i++){
      if(keys[i] === key){
        keys.splice(i,1);
        break;
      }
    }
    this.length--;
  };

  this.clear = function(){
    for(var i =0; i< keys.length; i++) document.cookie = keys[i]+"=; max-age=0";
    cookies = {};
    keys =[];
    this.length = 0;
  };

}



var name = localStorage.username;
name = localStorage["username"];
if(!name){
  name = prompt("What is yor name?");
  localStorage.username = name;
}

for(var name in localStorage){
  var value = localStorage[name];

}
