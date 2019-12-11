function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }

function primerForm(){
  document.getElementById("primerEstilo").style.display="block";
  document.getElementById("segundoEstilo").style.display="none";
  
}

function segundoForm(){
  document.getElementById("primerEstilo").style.display="none";
  document.getElementById("segundoEstilo").style.display="block";

}