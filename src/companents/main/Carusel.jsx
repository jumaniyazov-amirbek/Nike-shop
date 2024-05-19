import React, { useState, useEffect, useRef } from "react";

import img1 from "../../assets/glasses/img1.webp";
import img2 from "../../assets/glasses/img2.webp";
import img3 from "../../assets/glasses/img3.webp";
import img4 from "../../assets/glasses/img4.webp";
import img5 from "../../assets/glasses/img5.webp";
import img6 from "../../assets/glasses/img6.webp";
const Carusel = () => {
    const trackRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            image: img1,
        },
        {
            id: 2,
            image: img2,
        },

        {
            id: 3,
            image: img3,
        },

        {
            id: 4,
            image: img4,
        },
        {
            id: 5,
            image: img5,
        },
        {
            id: 6,
            image: img6,
        },
        ,
    ];

    const moveToSlide = (index) => {
        if (trackRef.current) {
            const slideWidth =
                trackRef.current.children[0].getBoundingClientRect().width;
            trackRef.current.style.transform = `translateX(-${
                slideWidth * index
            }px)`;
        }
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        moveToSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(newIndex);
    };

    useEffect(() => {
        const setSlidePosition = () => {
            if (trackRef.current) {
                Array.from(trackRef.current.children).forEach(
                    (slide, index) => {
                        slide.style.left = `${
                            slide.getBoundingClientRect().width * index
                        }px`;
                    }
                );
            }
        };
        setSlidePosition();
        window.addEventListener("resize", setSlidePosition);

        return () => {
            window.removeEventListener("resize", setSlidePosition);
        };
    }, []);

    return (
        <div className="carousel">
            <div className="carousel__track-container">
                <ul className="carousel__track" ref={trackRef}>
                    {slides.map((slide, index) => (
                        <li
                            key={index}
                            className={`carousel__slide ${
                                index === currentIndex ? "current-slide" : ""
                            }`}
                        >
                            <div ref={slide.id}>
                                {" "}
                                <img
                                    className="carousel__images"
                                    src={slide.id}
                                    alt={`Slide ${index}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="carousel__nav">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel__indicator ${
                            index === currentIndex ? "current-slide" : ""
                        }`}
                        onClick={() => moveToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carusel;
