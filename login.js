const regEx_numeros = /^[0-9]+$/;
const regEx_clave = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
var formulario = document.getElementById("formulario_ingreso");

function validar_usuario() {
    var usuario = document.getElementById("usuario").value;
    if (regEx_numeros.test(usuario) && (usuario.length == 8)) {
        //alert("pusiste un número")
        return true
        // } else { alert("NO PUSISTE un número") }
        } else { return false }
}

function validar_clave() {
    var clave = document.getElementById("clave").value;
    if (regEx_clave.test(clave) && (clave.length > 5)) {
        // alert("pusiste una clave válida")
        return true
        // } else { alert("NO PUSISTE una clave válida") }
        } else { return false }
}

function validar(evento) {
    evento.preventDefault();
    if (!validar_usuario() || !validar_clave()) {
       alert("Usuario o clave son incorrectos.");
       return; 
       }
    formulario.submit();   
}

//envio.addEventListener("submit", validar(e));

// usuario.addEventListener("input", validar_usuario)

/*
usuario.addEventListener("input", function (){
    if (usuario.value === "1") {
        alert("pusiste 1")
        } else { alert("NO pusiste 1")}
    }
)
*/

