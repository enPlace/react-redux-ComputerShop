import Background from "../../Assets/pexels-steve-johnson-1044989.jpg";

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
/*         backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
        backgroundPosition: "center", */
      }}
    >

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
      />
      <div
        style={{
          marginTop: "65px",

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
        <h1>nuevohuevo!</h1>
      </div>
    </div>
  );
};

export default Home;
