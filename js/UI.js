
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

  //Mostrar Modal Nuevo Bien, Al presionar el boton Nuevo Bien.
  $('.ir-nuevo').on('click', function() {
    //$('#nuevo-bien').modal({ backdrop: 'static',keyboard:false});
    $('#nuevo-bien').modal('show');
  });

  //Colocar el cursor al inicio del Formulario Nuevo Bien, Al aparecer el Modal Nuevo Bien
  $('#nuevo-bien').on('shown.bs.modal', function () {
    $('#bien-cod-int').focus();
  })

  //Cerrar Modal Nuevo Bien, Al presionar los botones cerrar y cancelar.
  $('.bien-cancelar').on('click', function() {
    $('#bien-form').trigger("reset");
    $('#nuevo-bien').modal('hide');
  });


  $('#nuevo-bien').on('hide.bs.modal', function(){
    $('#bien-form').trigger("reset");
  });

});
