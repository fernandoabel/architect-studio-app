import Carousel from "react-material-ui-carousel";
import "./slider.scss";

function Item(props: any) {
    const { item } = props;
    return <div className="image" style={{ backgroundImage: `url(${item})` }} />;
}

export default function Slider(props: any) {
    const { images } = props;

    return (
        <Carousel
            className="carousel"
            height={"100%"}
            autoPlay={true}
            duration={1000}
            animation={"fade"}
            indicators={false}
            fullHeightHover={false}
            navButtonsAlwaysInvisible
            swipe={false}
        >
            {images.map((item: string, i: number) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}
