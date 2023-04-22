import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
}

const CustomRightArrow = ({ onClick, ...rest }:any) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        <button className='bg-[#444444] w-10 aspect-square text-white rounded-full absolute right-0' onClick={() => onClick()}>
            <i className="bi bi-caret-right-fill font-bold"></i>
        </button>
    )
};

const CustomLeftArrow = ({ onClick, ...rest }:any) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        <button className='bg-[#444444] w-10 aspect-square text-white rounded-full absolute left-0' onClick={() => onClick()}>
            <i className="bi bi-caret-left-fill font-bold"></i>
        </button>
    )
};

export default function PartnerCarousel({ children }:any) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items:  2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:  2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items:  2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            responsive={responsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            sliderClass='space-x-2'
        >
            {children}
        </Carousel>
    )
}

