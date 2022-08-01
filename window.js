function invoke(f,start,interval,end){
  if(!start) start = 0;
  if(arguments.length <= 2) setTimeout(f,start);
  else {
    setTimeout(repeat,start);

    function repeat(){var h = setInterval(f,interval)
      if(end) setTimeout(function(){clearInterval(h);},end);
    }

  }

}

function urlArgs(){
  var args = {};
  var query = location.search.substring(1);
  var pairs = query.split("&");
  for(var i =0; i<pairs.length; i++)
  {
    var pos = pairs[i].indexOf('=');
    if(pos == -1)continue;
    var name = pairs[i].substring(0,pos);
    var value = pairs[i].substring(pos+1);
    value = decodeURIComponet(value);
    args[name] = value;
  }
  return args;
}

var whenReady = (function() {
  var funcs =[];
  var ready = false;
  function handler(e) {
    if(ready) return;
    if(e.type === "readystatechange" && document.readyState !== "complete")
    return;

    for(var i =0; i < funcs.length; i++)
    funcs[i].call(document);
    ready = true;
    funcs = null;
  }

 if(document.addEventListener){
   document.addEventListener("DOMContentLoaded",handler,false);
   document.addEventListener("readystatechange",handler,false);
   window.addEventListener("load",handler,false);
 }

 return function whenReady(f){if(ready) f.call(document);
 else funcs.push(f)}

}());
