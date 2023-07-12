const slideStateToClassName = (state) => {
    switch (state) {
        case -1:
            return "carousel-slide-current";
        case 0:
            return "carousel-slide-prev";
        case 1:
            return "carousel-slide-next";
        default:
            return "carousel-slide-hide";
    }
}
const CarouselSlide = ({image, slideState}) => {
    return (
        <div
            className={"carousel-slide "+`${slideStateToClassName(slideState)}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
        </div>
    );
}

export default CarouselSlide;