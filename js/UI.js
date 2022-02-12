
$(document).ready(function(){
    //Oculta el Menú Principal al hacer clic en una de sus opciones, ideal cuando es una app de una sola pagina
    
    $( "*", "#opciones" ).on( "click", function() {
        $(".navbar-toggler").click();
      });
    
    //En caso ya se esta logueado te manda al principal


});


