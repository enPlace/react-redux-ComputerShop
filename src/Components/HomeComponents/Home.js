import speaker from "../../Assets/pexels-steve-johnson-1044989.jpg";
import icon from "../../Assets/newegg.png";
import LinksCarousel from "./LinksCarousel";
import "./Home.css";
const Home = () => {
  return (
    <div
      className = "Home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        overflowx: "none",
        
      }}
    >
      <img
        src={speaker}
        alt=""
        style={{
          position: "fixed",
          width: "150vw",
          height: "150vh",
          zIndex: "-10",
          backgroundColor: "black",
        }}
      />
      <div  style ={{
        marginTop: "65px",
        backgroundColor: "rgba(0, 0, 0, 0.481) ",
        width: "100vw",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        
      }}>
      <LinksCarousel></LinksCarousel>
      </div>
      {/*       <video
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        playsInline
        autoPlay
        muted
        loop
        id="bgvid"
      >
        <source src={video} type="video/mp4"></source>
      </video> */}
      {/* <Link to="/shop/laptops" style={{ position: "fixed", bottom: "270px" }}>
        <button
          style={{
            width: "300px",
            height: "50px",
            border: "none",
            backgroundColor: "rgba(255, 166, 0, 0.94)",
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          Start shopping
        </button>
      </Link> */}
      <div className="Title">
        <img src={icon} alt="" style={{}} />
        <h1>nuevohuevo!</h1>
      </div>
    </div>
  );
};

export default Home;
