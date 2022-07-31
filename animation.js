function shake(e,oncomplete,distance,time){
  console.log("start");
  if(typeof e === "string" ) e=document.getElementById(e);
  if(!time) time = 500;
  if(!distance) distance = 5;

  var originalStyle = e.style.cssText;
  e.style.position = "relative";
  var start = (new Date()).getTime();
  animate();

  function animate(){
    var now = (new Date()).getTime();
    var elapsed = now - start;
    var fraction = elapsed/time;
    if(fraction < 1){
      var x = distance * Math.sin(fraction*4*Math.PI);
      console.log(x);
      e.style.left = x+"px";
      setTimeout(animate,Math.min(25,time-elapsed));
    }
    else {
      e.style.cssText = originalStyle;
      if(oncomplete) oncomplete(e);

    }
  }

}

function fadeOut(e,oncomplete,time){
  if(typeof e === "string") e = document.getElementById(e);
  if(!time) time = 500;
  var ease = Math.sqrt;
  var start = (new Date()).getTime();
  animate()

  function animate(){
    var elapsed = (new Date()).getTime() - start;
    var fraction = elapsed/time;
    if(fraction < 1){
      var opacity = 1 - ease(fraction);
      e.style.opacity = String(opacity);
      setTimeout(animate,Math.min(25,time-elapsed));
    }
    else{
      e.style.opacity = "100";
      if(oncomplete) oncomplete(e);
    }
  }
}
