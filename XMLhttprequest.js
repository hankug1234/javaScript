function getText(url,callback)
{
  var request = new XMLHttpRequest();
  request.open('GET',url);
  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
      var type = request.getResponseHeader("Content-Type");
      if(type.match(/^text/)) callback(request.resonseText);
    }
  }
  request.send(null);
}

function getTextync(url)
{
  var request = new XMLHttpRequest();
  request.open("GET",null,false);
  request.send(null);

  if(request.status !== 200) throw new Error(request.statusText);

  var type = request.getResponseHeader("Content-Type");
  if(!type.match(/^text/)) throw new Error("response must be text current state:"+type);
  return request.reponseText;
}

function get(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET",url);
  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
      var type = request.getResponseHeader("Content-Type");
      if(type.indexOf("xml") !== -1 && request.responseXML)
       callback(request.responseXML);
      else if(type === "application/json")
        callback(JSON.parse(request.responseText));
      else callback(request.responseText);
    }
  }
  request.send(null);
}

function encodeFormData(data){
  if(!data) return "";
  var pairs = [];
  for(var name in data){
    if(!data.hasOwnProperty(name)) continue;
    if(typeof data[name] === "function") continue;
    var value = data[name].toString();
    name = encodeURIComponet(name.replace(" ","+"));
    value = encodeURIComponet(value.replace(" ","+"));
    pairs.push(name+"="+value);
  }
  return pairs.join('&');
}

funtion postFormData(url, data, callback){
  if(typeof FormData === "undefined")
   throw new Error("formData is not implemented");

   var request = new XMLHttpRequest();
   request.open("POST",url);
   request.onreadystatechange = function(){if(request.readyState === 4 && callbakc) callback(request);};

   var formdata = new FormData();
   for(var name in data){
     if(!data.hasOwnProperty(name))continue;
     var value = data[name];
     if(typeof value === "function") continue;
     formdata.append(name,value);
   }
   request.send(formdata);
}

function postData(url,data, callback){
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.onreadystatechange = function(){
    if(request.readyState === 4 && callback) callbakc(request);
  };
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  request.send(endcodeFormData(data));
}

function postMessage(msg,url){
  var request = new XMLHttpRequest();
  request.open("POST",url);
  request.setRequestHeader("Content-Type","text/plain;charset=UTF-8")
  request.send(msg);
}

function sendMessage(){
  console.log("click");
  var message = document.getElementById('text');
  var url = document.getElementById('url');
  console.log(message.value,url.value);
  postMessage(message.value,url.value);
  message.value = "";
  url.value = "";
}

function attachFunction(w)
{
  document.getElementById('send_request').addEventListener("click",sendMessage,false);
  console.log("work success");
}

window.addEventListener("load",attachFunction,false);
