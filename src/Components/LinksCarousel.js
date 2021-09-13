import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import laptop from "../Assets/laptop.jpeg"
import tablet from "../Assets/tablet.jpeg"
import keyboard from "../Assets/keyboard.jpeg"
import mouse from "../Assets/mouse.jpeg"
import headset from "../Assets/headphonesman.jpeg"

const LoadPhoto = lazy(() => import("./LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

export default function LinksCarousel() {
  return (
    <div
      className="carousel-wrapper"
      style={{
        width: "900px",
        marginTop: "100px",

      }}
    >
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        stopOnHover={false}
        showStatus={false}
        centerMode = {true}
        centerSlidePercentage = {40}
      >
        <div style={{ color: "white", display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
          <Suspense fallback={loader()}>
            <LoadPhoto source={laptop} width="300px" />
          </Suspense>
          <h1 style = {{marginBottom: "50px", backgroundColor: "rgba(255, 166, 0, 0.94)", borderRadius: "30px", padding: "10px",}}>Laptops</h1>
        </div>

        <div style={{ color: "white", display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
          <Suspense fallback={loader()}>
            <LoadPhoto source={tablet} width="300px" />
          </Suspense>
          <h1 style = {{marginBottom: "50px"}}>Tablets</h1>
        </div>

        <div style={{ color: "white", display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
          <Suspense fallback={loader()}>
            <LoadPhoto source={keyboard}  width="300px" />
          </Suspense>
          <h1 style = {{marginBottom: "50px"}}>Keyboards</h1>
        </div>
        <div style={{ color: "white", display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
          <Suspense fallback={loader()}>
            <LoadPhoto source={mouse} width="300px" />
          </Suspense>
          <h1 style = {{marginBottom: "50px"}}>Mice</h1>
        </div>
        <div style={{ color: "white", display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
          <Suspense fallback={loader()}>
            <LoadPhoto source={headset} width="300px" />
          </Suspense>
          <h1 style = {{marginBottom: "50px"}}>Headsets</h1>
        </div>
        

      </Carousel>
    </div>
  );
}
