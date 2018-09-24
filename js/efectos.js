$(document).on("scroll", function(){
	/*
	* Se usara este del scroll para ir mostrando el contenido de la pagina de about
	*/
    //sacamos el desplazamiento actual de la página
    var valor = $(document).scrollTop(); 
    var ancho =  $(window).width();    // ancho

    $('#pApli').removeClass('oculto');
    $('#equitra').removeClass('oculto');
    $('#pApli2').removeClass('oculto');
    $('#equitra2').removeClass('oculto');

    if(ancho > 1200){

        $('#pApli').addClass('oculto');
        $('#equitra').addClass('oculto');
        $('#pApli2').addClass('oculto');
        $('#equitra2').addClass('oculto');

        if(valor >= 270){
            $('#pApli').removeClass('oculto');
            $('#pApli').addClass('animated lightSpeedIn');
        }
        if(valor >= 480){
            $('#pApli2').removeClass('oculto');
            $('#pApli2').addClass('animated bounceInUp');
        }

        if(valor >= 900){
            $('#equitra').removeClass('oculto');
            $('#equitra').addClass('animated flipInX');
        }

        if(valor >= 1090){
            $('#equitra2').removeClass('oculto');
            $('#equitra2').addClass('animated rollIn');
        } 

    }
   
});
