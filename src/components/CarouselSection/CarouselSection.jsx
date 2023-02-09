import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselSection.scss";
import { Carousel } from 'react-responsive-carousel';

function CarouselSection() {
    return (
        <section className='carousel-section'>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <picture className="carousel-section__image">
                        <source srcSet="img/slider-img-small.png" media="(max-width: 37.5em)" />
                        <img className="carousel-section__img" src="img/slider-img.png" alt="img 1" />
                    </picture>
                </div>
                <div>
                    <picture className="carousel-section__image">
                        <source srcSet="img/slider-img-small.png" media="(max-width: 37.5em)" />
                        <img className="carousel-section__img" src="img/slider-img.png" alt="img 1" />
                    </picture>
                </div>
                <div>
                    <picture className="carousel-section__image">
                        <source srcSet="img/slider-img-small.png" media="(max-width: 37.5em)" />
                        <img className="carousel-section__img" src="img/slider-img.png" alt="img 1" />
                    </picture>
                </div>
            </Carousel>
        </section>

    );
}


export default CarouselSection;