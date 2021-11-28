

var imgs = ['images/imagen3.jpg','images/imagen2.jpg', 'images/imagen1.jpg'];
var acu=0;


function carrusel(){
    document.getElementById("cambio").src = imgs[acu];
    acu++;

    if(acu > imgs.length){
        document.getElementById("cambio").src = imgs[0];
        acu=1;
    }
    
    setTimeout( $("#cambio").fadeOut("fast"),
                $("#cambio").fadeIn("fast"), 4000);

    setTimeout("carrusel()", 4000);
}



document.addEventListener("DOMContentLoaded", function(e){
    carrusel();


});




function validarform(nombre, apellido, correo, tel, dni){

    //validando el nombre - solo se puede ingresar letras
    exprnombre = /^[a-zA-Z]+$/

    if(nombre === null || !exprnombre.test(nombre)){
        document.getElementById("errorNom").style.display = "inline-block";
        alert("tuviejita");
    }else{
        document.getElementById("errorNom").style.display = "none";
    }

    //validando el apellido - solo se puede ingresar letras
    exprapellido = /^[a-zA-Z]+$/

    if(apellido === null || !exprapellido.test(apellido)){
        document.getElementById("errorApel").style.display = "inline-block";
    }

    //validando el correo - letras antes de "@" y depues tambien
    exprcorreo = /^([a-zA-Z\d])+\@([a-zA-Z\d])+\.com$/

    if(correo === null || !exprcorreo.test(correo)){
        document.getElementById("errorCor").style.display = "inline-block";
    }

    //validando el telefono - solo pueden ser ingresados 9 digitos
    exprtel = /^[\d]{9}$/

    if(tel === null || !exprtel.test(tel)){
        document.getElementById("errorTel").style.display = "inline-block";
    }else{
        document.getElementById("errorTel").style.display = "none";
    }

    //validando el dni - solo digitos maximo 8
    exprdni = /^[\d]{8}$/

    if(dni === null || !exprdni.test(dni)){
        document.getElementById("errorDni").style.display = "inline-block";
    }

}

//pestaña sorteo

$(document).ready(function(e)
{
    $("#titulo").text("SORTEO POR FIESTAS NAVIDEÑAS ");
        $("#capa4").text("SUERTE!! ");

        $("#titulo1").text("TE LLEGARA UN CORREO EL 25 DE DICIEMBRE SI LLEGASTES A SER EL GANADOR ");

 $("#txtmensaje").mouseenter(function(e)
 {
    $("#mensaje").text("Dale aceptar y podras ingresar automaticamente al sorteo ");
 });
 $("#txtmensaje").mouseleave(function(e)
 {
    $("#mensaje").text("");
 });

 });

$(document).click(mostrarBoton)

{
  function mostrarBoton(){
    if($("#chkaceptar").is(":checked"))
    {
       $("#capa2").css("display","block");
    }
    else
    {
      $("#capa2").css("display","none");

    }
  }
};
$(document).click(OcultarMostrar)

{
  function OcultarMostrar(){
    
    $("#capa1").css("display","none");
        $("#capa2").css("display","none");
            $("#capa3").css("display","block");
            $("#capa4").css("display","block");


  }
};

function colaEfectos()
{

    capa=$("#capa4");

    capa.animate(
     {
        "font-size":"3em"
     },2000);
//--------
    capa.hide(5000);
    //----------
    capa.show(5000);
    //---------
    capa.animate(
    {
       "left":"200px",
       "top":"50px",
       "right": "700px"
    },2000);
    capa.animate(
    {
       "font-size": "1em"
    },2000);

    capa.animate(
    {
       "left":"750px",
       "top":"50px"
    },2000,colaEfectos);


}

$(document).ready(function()
{
  colaEfectos();
});

