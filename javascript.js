
$(document).ready(function(){
    $("#imagen").mouseenter(function(){
        $(this).fadeOut(2000, function(){
        $("p").show(1000);
        });
    });
});
