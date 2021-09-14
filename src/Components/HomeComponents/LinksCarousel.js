import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import laptop from "../../Assets/laptop.jpeg";
import tablet from "../../Assets/tablet.jpeg";
import keyboard from "../../Assets/keyboard.jpeg";
import mouse from "../../Assets/mouse.jpeg";
import headset from "../../Assets/headphonesman.jpeg";

const LoadPhoto = lazy(() => import("../LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

export default function LinksCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        stopOnHover={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={20}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/shop/laptops">
            <Suspense fallback={loader()}>
              <LoadPhoto source={laptop} width="300px" />
            </Suspense>
            <h1
              style={{
                marginBottom: "30px",
              }}
            >
              Laptops
            </h1>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/shop/tablets">
            <Suspense fallback={loader()}>
              <LoadPhoto source={tablet} width="300px" />
            </Suspense>
            <h1 style={{ marginBottom: "30px" }}>Tablets</h1>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/shop/keyboards">
            <Suspense fallback={loader()}>
              <LoadPhoto source={keyboard} width="300px" />
            </Suspense>
            <h1 style={{ marginBottom: "30px" }}>Keyboards</h1>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/shop/mice">
            <Suspense fallback={loader()}>
              <LoadPhoto source={mouse} width="300px" />
            </Suspense>
            <h1 style={{ marginBottom: "30px" }}>Mice</h1>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/shop/headphones">
          <Suspense fallback={loader()}>
            <LoadPhoto source={headset} width="300px" />
          </Suspense>
          <h1 style={{ marginBottom: "30px" }}>Headsets</h1>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
