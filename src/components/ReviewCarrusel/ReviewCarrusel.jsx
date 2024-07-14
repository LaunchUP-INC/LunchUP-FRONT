import styles from "./ReviewCarrusel.module.css";
import { Carousel } from "react-bootstrap";
import Reviews from "../Reviews/Reviews";

const ReviewCarrusel = () => {

    return (

        <Carousel interval={3000} variant="dark" slide={false}>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
            <Carousel.Item>
                <Reviews />
            </Carousel.Item>
        </Carousel>

    )

}

export default ReviewCarrusel