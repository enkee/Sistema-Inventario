
$(document).ready(function () {
  //Oculta el Menú Principal al hacer clic en una de sus opciones, ideal cuando es una app de una sola pagina

  if (screen.width <= 992) {
    $("*", "#opciones").on("click", function () {
      $(".navbar-toggler").click();
    });
  }


  //En caso se presione sobre un enlace, resaltarlo, y al soltar regresar como estaba antes
  $("a", "body").mousedown(function () {
    $(this).css({ 'color': 'red' });
  }).mouseup(function () {
    $(this).css("color", "#727272");
  }).mouseout(function () {
    $(this).css("color", "#727272");
  });

});
