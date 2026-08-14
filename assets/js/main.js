$(document).ready(function () {
    $("#mailTo").on("click", function () {
        const part2 = "kar";
        const part1 = "aupendu";
        const part3 = Math.pow(2, 6);
        const part6 = ".ac.in";
        const part5 = "iitkgp";

        if (confirm("Click \"OK\" to open your default email app.")) {
            window.location.href = "mailto:" + part1 + part2 + String.fromCharCode(part3) + part5 + part6;
        }
    });

    $(".gScholar").on({
        mouseenter: function () {
            $(this).css({ cursor: "pointer", color: "#527bbd", fontWeight: "bold" });
        },
        mouseleave: function () {
            $(this).css({ color: "gray", fontWeight: "normal", cursor: "context-menu" });
        }
    });

    $(".webBadge").on({
        mouseenter: function () {
            $(this).removeClass("bg-dark").addClass("bg-secondary");
        },
        mouseleave: function () {
            $(this).removeClass("bg-secondary").addClass("bg-dark");
        }
    });

    $(".pdfBadge").on({
        mouseenter: function () {
            $(this).removeClass("bg-info").addClass("bg-warning");
        },
        mouseleave: function () {
            $(this).removeClass("bg-warning").addClass("bg-info");
        }
    });

    $(".emailIcon").on({
        mouseenter: function () {
            $(".fa-envelope").removeClass("d-none");
        },
        mouseleave: function () {
            $(".fa-envelope").addClass("d-none");
        }
    });

    $(".extLink").on({
        mouseenter: function () {
            $(".fa-external-link-alt").removeClass("d-none");
        },
        mouseleave: function () {
            $(".fa-external-link-alt").addClass("d-none");
        }
    });
});
