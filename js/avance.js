$(document).ready(function(e)
{
    $("#titulo").text("La pornostar mas famosa ");

 $("#txtmensaje").mouseenter(function(e)
 {
    $("#mensaje").text("Dale en aceptar y veras unas Tetasas ");
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


  }
};