
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  slideContent: Array<string | JSX.Element>;
  slideCount: number;
}

export default function SliderBanner({slideContent}: SliderProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <Slider {...settings} className="banners w-full m-auto relative">
            {slideContent.map((slide, index) => (
                <div key={index} >
                    {slide}
                </div>
            ))}
        </Slider>
    );
}


















/* arrays que precisma estar na pagina onde o swiper vai ser chamado contendo o conteudo dos sliders

const slideContent = [
    'Texto do Slide 1', 
    'Texto do Slide 2', 
    'Texto do Slide 3', 
    <img src={image7} className="rounded" alt="imagem de consultorio da franquia Olhar Certo" />,
];
        
const slideCount = slideContent.length;

o coponente será chamado assim:
<Slider
    slideContent= {slideContent}
    slideCount= {slideCount}
/>
*//*
<Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[ Pagination, Navigation]}
            className="mySwiper rounded"
        >
            {slideContent.map((content, index:number) => (
                <SwiperSlide key={index} className='w-full h-full flex justify-center items-center px-5'>
                    {content}
                </SwiperSlide>
            ))}
        </Swiper>*/