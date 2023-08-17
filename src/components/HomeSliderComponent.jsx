import React from "react";
import Slider from "react-slick";

export default function HomeSliderComponent() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderImages = [
        {
            src: './images/christmas-mobile.jpg',
            srcSet: '../../images/christmas-2971961_1920.jpg',
            alt: 'christmas'
        },
        {
            src: './images/baby_mobile.jpg',
            srcSet: './images/baby-3036925_1920.jpg',
            alt: 'baby image'
        },
        {
            src: './images/girl_mobile.jpg',
            srcSet: './images/girl-2122909_1920.jpg',
            alt: 'girl image'
        }
    ];

    return (
        <Slider {...settings} className='dashboard_slider'>
            {sliderImages.map((image, index) => (
                <picture key={index}>
                    <source media="(min-width: 768px)" srcSet={image.srcSet} alt={image.alt} />
                    <img src={image.src} alt={image.alt} />
                </picture>
            ))}
        </Slider>
    )

}