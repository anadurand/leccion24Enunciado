function crear(tag, clase, id){
  var elemento = document.createElement(tag);
      elemento.className = clase;
      if(id != "" && id != undefined){
        elemento.id = id;
      }
      return elemento;
}
