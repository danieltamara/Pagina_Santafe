
function validar(){
  var nombre, appellido, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("clave").value;
  telefono = document.getElementById("telefono").value;
  expresion = /\w+@\w+[A-Z]/;

if (nombre === "" || appellido === "" || correo === "" || usuario === ""|| clave === "" || telefono ==="") {
    alert ("Todos los campos son obligatorios");
    return false;
  }
if (nombre.length>20 || nombre.length<3) {
  alert ("El campo nombre tiene muchos caracteres o le faltan caracteres");
  return false;
}
 else if (apellido.length>20 || apellido.length<3) {
  alert("El campo apellido tiene muchos caracteres o le faltan caracteres");
  return false;
}
 else if (correo.length>40 || correo.length<8) {
  alert("Campo correo le falta o le sobra caracteres");
  return false;
}
else if (expresion.test(correo)) {
  alert("el correo no es valido");
  return false;
}
else if (usuario.length>10 || clave.length>10) {
  alert("el usuario y la contraseña son de 10 caracteres maximo");
  return false;
}
else if (telefono.length>10 || telefono.length<10) {
  alert("el campo telefono debe tener 10 caracteres");
  return false;
}
if (isNaN(telefono)) {
  alert("digite solo numeros en el campo telefono");
  return false;
}


}
