$(document).ready(function(){

    $("#exploreBtn").click(function(){
        $("#extraContent").fadeIn(1000);
    });

    $(".card").hover(function(){
        $(this).css("background", "rgba(255,165,0,0.8)");
    }, function(){
        $(this).css("background", "rgba(0,0,0,0.6)");
    });

});
