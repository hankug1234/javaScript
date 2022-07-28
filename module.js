function namespace(){
  function hello(){return "hello";}
}

var a = namespace();
console.log(namespace.hello());
