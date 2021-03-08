$(document).ready(function() {
    $(".bottone-1").mouseenter(function() {
        $(".st1").css("fill", "#FFFDF5");
    });

    $(".bottone-2").mouseenter(function() {
        $(".st2").css("fill", "#FFFDF5");
    });

    $(".bottone-3").mouseenter(function() {
        $(".st3").css("fill", "#FFFDF5");
    });

    $(".bottone-4").mouseenter(function() {
        $(".st4").css("fill", "#FFFDF5");
    });

    $(".bottone-off").mouseleave(function() {
        $(".st0").css("fill", "#333333");
    });
});