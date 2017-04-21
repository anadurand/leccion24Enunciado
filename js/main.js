window.addEventListener("load", function(){

  var body = document.getElementsByTagName("body")[0];
  var docFrag = document.createDocumentFragment();
  var box = crear("div", "caja-1");

  var header = crear("header", "header");
  var divRight = crear("div", "header-right");
  var spanLogo = crear("span", "logo");
  var img = crear("img", "foto");
  var spanTw = crear("span", "tw");
  var spanFc = crear("span", "face");
  var divLeft = crear("div", "header-left");
  var spanLogo = crear("span", "logo");
  var img = crear("img", "foto");
  var spanSearch = crear("span","search");
  var spanEdit = crear("span", "edit");

  var content = crear("section", "container");
  var footer = crear("footer", "footer");


  divRight.appendChild(spanLogo);
  divRight.appendChild(img);
  divRight.appendChild(spanTw);
  divRight.appendChild(spanFc);
  divLeft.appendChild(spanLogo);
  divLeft.appendChild(img);
  divLeft.appendChild(spanSearch);
  divLeft.appendChild(spanEdit);
  header.appendChild(divRight);
  header.appendChild(divLeft);
  box.appendChild(header);
  box.appendChild(content);
  box.appendChild(footer);


  docFrag.appendChild(box);
  body.insertBefore(docFrag, body.childNodes[0]);
});
