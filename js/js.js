const input_Email = document.getElementById("input_email");
const boton_formulario = document.getElementById("boton_enviar_formulario");

boton_formulario.addEventListener("click", function(){ValidarEmail(input_Email)});

function ValidarEmail(input_Email)
{
let formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(input_Email.value.match(formatoEmail)){
    document.getElementById("mensaje_error_email").style.display = "none";
    document.getElementById("icono_error").style.display = "none"
    alert("We catch your email, now you can stay up-to-date to get news of our new fashion store!");
    return true;
}else{
    input_Email.setCustomValidity.style =('');
    document.getElementById("mensaje_error_email").style.display = "block";
    document.getElementById("icono_error").style.display = "block"
    return false;
}
}




