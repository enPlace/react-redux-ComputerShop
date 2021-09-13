import speaker from "../../Assets/pexels-steve-johnson-1044989.jpg";
import icon from "../../Assets/newegg.png";
import LinksCarousel from "./LinksCarousel";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={speaker}
        alt=""
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "-10",
          backgroundColor: "black",
        }}
      />

      <LinksCarousel></LinksCarousel>
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
       <div
        className="Title"
        style={{
          width: "100vw",
          height: "170px",
          color: "white",
          position: "fixed",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontStyle: "italic",
          zIndex:"-10"

       
        }}
      >
        <img
          src={icon}
          alt=""
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            marginRight: "20px",
            marginTop: "10px",
            marginLeft: "-40px",
          }}
        />
        <h1>nuevohuevo!</h1>
      </div> 
    </div>
  );
};

export default Home;
