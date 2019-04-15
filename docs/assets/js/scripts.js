$(document).ready(function() {

    //$("body").hide();
    //$("body").delay(1800).fadeIn(3000);

    startLoader();

    window.setTimeout(function() {
      stopLoader();
    }, 1000);

 //Pega o click da opção
    $("ul#tabMenuOption > li").find("> a").click(function(event) {
        var selectedDiv = $(this).attr("rel");
        removerActive();
        if ( !$(this).parent().hasClass("active") ) {
            $(this).parent().addClass("active");
            contentShowHide(selectedDiv);
        }
    });

    $("span.fa").click(function(event) {

        $(this).css('right', '150px');
        $(".navbar.navbar-default").addClass('active');
        $(".backNav").show();

        $(".navbar.navbar-default").animate(0,function(){

            $(".navbar.navbar-default").css('right', '0px');
            $(".navbar.navbar-default").fadeIn(1000);
        });

        desativaMenu();

    }); // span.fa


}); //document.ready

function desativaMenu(){
    $(".backNav").click(function(event) {

        $("span.fa").css('right', '15px');
        $(".navbar.active").removeClass('active');

        $(".navbar.navbar-default").animate(0, function(){
            $(".navbar.navbar-default").css('right', '-140px');
            $(".backNav").hide();
        });

    });
}

//Function que inicia o loader
function startLoader(){
    var divLoader = $("<div class='loader'></div>").html("<div class='loaderContent'></div>");
    $("body").append(divLoader).fadeIn();
}

//Function que interrompe o loader
function stopLoader(){
    $(".loader").fadeOut('slow');
}

//Function que remove a class active
function removerActive(){

    $("ul#tabMenuOption li").each(function(index, el) {
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
        };
    });
} //removeActive

//Function que faz a remoção apresentação do conteudo
function contentShowHide(div){
    $("#boxContent > section").each(function(index, el) {
        $(this).removeClass("showHide");
    });
    $(""+div+"").addClass("showHide");
}//contentShowHide
