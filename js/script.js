
$('.slick-slider').slick({
    infinite: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 5, // Muestra 6 slides en desktop
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024, // Tablet
            settings: {
                slidesToShow: 4, // Muestra 4 slides en tablet
                centerPadding: '40px',
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768, // Mobile
            settings: {
                centerPadding: '20px',
                slidesToShow: 2, // Muestra 2 slides en mobile
                slidesToScroll: 1
            }
        }
    ]
});