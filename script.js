$(document).ready(
    $("#mailTo").click(function () {
        var part2 = "kar";
        var part1 = "aupendu";
        var part3 = Math.pow(2, 6);
        var part6 = ".ac.in";
        var part5 = "iitkgp";

        var x = confirm(
            part1 + part2 + String.fromCharCode(part3) + part5 + part6 + "\n\nClick \"OK\" to open your default email app."
        );
        if (x == true)
            window.location.href = "mailto:" + part1 + part2 + String.fromCharCode(part3) + part5 + part6;


    }),
    $(".gScholar").mouseover(function () {

        $(this).css("cursor", "pointer");
        $(this).css("color", "#527bbd");
        $(this).css("font-weight", "bold");

    }),
    $(".gScholar").mouseleave(function () {

        $(this).css("color", "gray");
        $(this).css("font-weight", "normal");
        $(this).css("cursor", "context-menu");

    })
);