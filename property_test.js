// in 상속 받은 property 까지 검사
// hasOwnProperty() 고유 객체 property 만 검사
// propertyIsEnumerable() 객체의 고유 property가 열거 가능할 경우 에만 true 반환

var inherit = require("D:/javaScript/inherit.js")
var o = {x:0};
var type = typeof o;
var re1 = "x" in o;
var re2 = "toString" in o;
var re2 = o.hasOwnProperty("x");
var re3 = o.hasOwnProperty("toString");

var k = inherit({x:1});
k.y = 2;
var pn = inherit({});
var re4 = typeof k;
var re5 = typeof pn;
var re6 = k.propertyIsEnumerable("x");
var re7 = k.propertyIsEnumerable("toStirng");
var re8 = k.propertyIsEnumerable("y");

console.log(type,re1,re2,re3,re4,re5,re6,re7,re8);
