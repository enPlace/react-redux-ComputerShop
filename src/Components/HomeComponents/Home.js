import Background from "../../Assets/background3.jpeg";

import icon from "../../Assets/newegg.png";
import LinksCarousel from "./LinksCarousel";
import "./Home.css";
const Home = () => {
  return (
    <div
      className="Home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        overflowx: "none",
        backgroundColor: "orange",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}
    >
      {/* 
            <img
        src={Background}
        alt=""
        style={{
          position: "fixed",
          width: "150vw",
          height: "150vh",
          zIndex: "-10",
          backgroundColor: "black",
        }}
      /> */}
      <div
        className="linksCaroselContainer"
        style={{
          marginTop: "75px",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinksCarousel></LinksCarousel>
      </div>

      <div className="Title">
        <img src={icon} alt="" style={{}} />
        <h1 style = {{marginLeft: "-30px"}}>nuevohuevo!</h1>
      </div>
    </div>
  );
};

export default Home;
