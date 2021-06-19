$(document).ready(
    $("#mailTo").click(function () {
        const part2 = "kar";
        const part1 = "aupendu";
        const part3 = Math.pow(2, 6);
        const part6 = ".ac.in";
        const part5 = "iitkgp";

        const x = confirm(
            "Click \"OK\" to open your default email app."
        );
        if (x == true)
            window.location.href = "mailto:" + part1 + part2 + String.fromCharCode(part3) + part5 + part6;


    }),
    $(".gScholar").mouseover(function () {

        $(this).css("cursor", "pointer").css("color", "#527bbd").css("font-weight", "bold");
    }),
    $(".gScholar").mouseleave(function () {

        $(this).css("color", "gray").css("font-weight", "normal").css("cursor", "context-menu");
    }),
    $(".webBadge").mouseover(function () {
        $(this).removeClass('bg-dark').addClass('bg-secondary');
    }),
    $(".webBadge").mouseleave(function () {
        $(this).removeClass('bg-secondary').addClass('bg-dark');
    }), $(".pdfBadge").mouseover(function () {
        $(this).removeClass('bg-info').addClass('bg-warning');
    }),
    $(".pdfBadge").mouseleave(function () {
        $(this).removeClass('bg-warning').addClass('bg-info');
    }));