import React, { useState, useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { time } from "console";

const slides = [
  <StaticImage
    src="http://via.placeholder.com/400x250"
    alt="carousel_image_placeholder"
    key={0}
  />,
  <StaticImage
    src="https://via.placeholder.com/300.png/0955/fff"
    alt="carousel_image_placeholder"
    key={1}
  />,
  <StaticImage
    src="https://via.placeholder.com/300.png/0978f/fff"
    alt="carousel_image_placeholder"
    key={2}
  />,
  <StaticImage
    src="https://via.placeholder.com/300.png/0911f/fff"
    alt="carousel_image_placeholder"
    key={3}
  />,
];

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //         if (activeSlide > 0) {
  //             setActiveSlide((prev) => prev - 1);
  //         }
  //         else if (activeSlide < slides.length - 1){
  //          setActiveSlide((prev) => prev + 1);
  //         }
  //         else {
  //             setActiveSlide(0)
  //         }
  //       }, 4000);

  //   }, []);

  const firstSlide = slides.map((slide, index, array) => {
    if (parseInt(slide.key) === activeSlide) {
      return <div>{slide}</div>;
    } else {
      return;
    }
  });

  const secondSlide = slides.map((slide, index, array) => {
    if (parseInt(slide.key) === activeSlide + 1) {
      return <div>{slide}</div>;
    } else {
      return;
    }
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "calc(100vh - 150px)",
          gap: "30px",
        }}
      >
        {firstSlide}
        {secondSlide}
      </div>
      <div>
        <button
          onClick={() => {
            if (activeSlide > 0) {
              setActiveSlide((prev) => prev - 1);
            } else {
              return;
            }
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            if (activeSlide < slides.length - 1) {
              setActiveSlide((prev) => prev + 1);
            } 
            else {
              setActiveSlide(0)
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
