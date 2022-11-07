let images = document.querySelectorAll(".lazyload");
if (images) {
    lazyload(images);
}

$('.feedback-slider').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: true,
    variableHeight: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            }
        },
    ]
});
$('.hello-slider').slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                arrows: true
            }
        },
    ]
});
$('.shop-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    Infinity: false,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 690,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                arrows: true
            }
        },
    ]
});
