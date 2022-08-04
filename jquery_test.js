window.addEventListener("load", function(){
var a = $("body").length;
var head = document.createElement("h1");
head.innerHTML = a;
var body = document.getElementsByTagName("body")[0];
body.appendChild(head);
}, false);
