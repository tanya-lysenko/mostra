$(function() {
    // Пустые ссылки
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    // Масштабируемые картинки
    $(".img-scalable").each(function () {
        var box = $(this).find(".img-box"),
            k = parseInt(box.css("max-width"), 10) / parseInt(box.css("max-height"), 10)
        ;
        $(document).ready(function () {
            box.height(box.width() / k);
        });
        $(window).resize(function () {
            box.height(box.width() / k);
        });
    });

    // Мобильное меню
    $("a.bars").click(function () {
        $("#header nav").toggleClass("visible");
    });
});