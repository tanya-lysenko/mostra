document.addEventListener('click', function (e) {
    const condition1 = e.target.href === '#';
    const condition2 = e.target.closest(`[href="#"]`);

    if (condition1 || condition2) {
        e.preventDefault();
    }
});

const menuBars = document.querySelector('#header .bars');
const menuList = document.querySelector('#header nav');

menuBars.addEventListener('click', function () {
    menuList.classList.toggle('visible');
});

// $(function() {
//     // Масштабируемые картинки
//     $(".img-scalable").each(function () {
//         var box = $(this).find(".img-box"),
//             k = parseInt(box.css("max-width"), 10) / parseInt(box.css("max-height"), 10)
//         ;
//         $(document).ready(function () {
//             box.height(box.width() / k);
//         });
//         $(window).resize(function () {
//             box.height(box.width() / k);
//         });
//     });
//
// });