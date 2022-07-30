function getElements(){
  var elements = {};
  for(var i = 0; i< arguments.length; i++)
  {
    var id = arguments[i];
    var elt = document.getElementById(id);
    if(elt == null)
    {
      throw new Error("no element with id");
      elements[id] = elt;
    }
  }
  return elements;
}

function parent(e,n)
{
  if(n===undefined ) n =1;
  while(n-- && e) e = e.parentNode;
  if(!e || e.nodeType !== 1) return null;
  return e;
}

function sibling(e,n){
  while(e && n !== 0){
    if(n>0)
    {
      if(e.nextElementSibling) e = e.nextElementSibling;
      else {
        for(e = e.nextSibling; e && e.nodeType !== 1; e =e.nextSibling);
      }
      n--;
    }
    else{
      if(e.previousElementSibling) e =e.previousElementSibling;
      else{
        for(e=e.perviousSibling; e&&e.nodeType!==1;e=e.previousSibling);
      }
      n++;
    }
  }
  return e;
}

function child(e,n)
{
  if(e.children){
    if(n<0) n+=children.length;
    if(n<0) return null;
    return e.children[n];
  }

  if(n>0){
    if(e.firstElementChild) e=e.firstElementChild
    else{
      for(e=e.firstChild;e&&e.nodeType!==1;e=e.nextSibling);
    }
    return sibling(e,n);
  }
  else{
    if(e.lastElementChild) e=e.lastElementChild;
    else {
      {
        for(e=e.lastElementChild;e&&e.nodeType!==1;e=e.previousSibling);
      }
    }
    return sibling(e,n+1);
  }

}

function testContent(element,value){
  var content = element.textContent;
  if(value === undefined)
  {
    if(content !== undefined) return content;
    else element.innerText;
  }
  else {
    if(content !== undefined) element.textContent = value;
    else element.innertText = value;
  }
}

function textContent2(e){
  var child, type, s ="";
  for(child = e.firstChild; child != null; child = child.nextSibling)
  {
    type = child.nodeType;
    if(type === 3 || type === 4)
     s+=child.nodeValue;
    else if (type === 1)
     s += textContent(child);
  }
  return s;
}

function loadasync(url){
  var head = document.getElementsByTagName("head")[0];
  var s = document.createElement("script");
  s.src = url;
  head.appendChild(s);
}

function insertAt(parent,child,n)
{
  if(n<0 || n>parent.childNodes.length) throw new Error("invalid index");
  else if(n == parent.childNodes.length) parent.appendHild(child);
  else parent.insertBefore(child,parent.childNodes[n]);
}

function sortrows(table,n,comparator){
  var tbody = table.tBoides[0];
  var rows = tbody.getElementByTagName("tr")[n];
  rows = Array.prototype.slice.call(rows,0);

  rows.sort(function(row1,row2){
    var cell1 = row1.getElementsByTagName("td")[n];
    var cell2 = row2.getElementByTagName("td")[n];
    var val1 = cell1.textContent || cell1.innerText;
    var val2 = cell2.textContent || cell2.innerText;
    if(comparator) return comparator(val1,val2);
    if(val1 < val2) return -1;
    else if(val1 > val2) return 1;
    else return 0;
  })

  for(var i = 0; i<rows.length; i++) tbody.appendChild(rows[i]);
}

function makeSortTable(table){
  var headers = table.getElementsByTagName("th");
  for(var i = 0; i< headers.length; i++)
  {
    (function(n){
      headers[i].onclick = function(){sortrows(table,n);};
    }(i));
  }
}

function embolden(n){
  if(typeof n == "string") n = document.getElementById(n);
  var parent = n.parentNode;
  var b = document.createElement("b");
  parent.replaceChild(b,n);
  b.appendChild(n);
}

function reverse(n){
  var f = document.createDocumentFragment();
  while(n.lastChild) f.appendChild(n.lastChild);
  n.appendChild(f);
}
