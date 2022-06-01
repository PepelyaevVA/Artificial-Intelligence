import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    responsive: [
        {
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        {
        breakpoint: 641,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        
    ]
})
