// Validação campo nome
let msgNome = document.querySelector(".nome-invalid");
let iptNome = document.querySelector("#nome")
let regexNome = /^[a-z]+$/i;

iptNome.onblur = function(){
  if(regexNome.test(iptNome.value)){
    msgNome.style.display = "none";
  } else {
      msgNome.style.display = "block";
  }

}

//Validação campo documento
// let iptDocumento = document.querySelector("#documento")
// let regexDocumento = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

