window.addEventListener("load", function(){

  var body = document.getElementsByTagName("body")[0];
  var docFrag = document.createDocumentFragment();
  var box = crear("div", "caja-1");

  var header = crear("header", "header");
  var divRight = crear("div", "header-right");
  var spanLogo = crear("span", "logo");
  
  var divLeft = crear("div", "header-left");
  var content = crear("section", "container");
  var footer = crear("footer", "footer");


  divRight.appendChild(spanLogo);
  header.appendChild(divRight);
  header.appendChild(divLeft);
  box.appendChild(header);
  box.appendChild(content);
  box.appendChild(footer);


  docFrag.appendChild(box);
  body.insertBefore(docFrag, body.childNodes[0]);
});
