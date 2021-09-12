import video from "../homevid(online-video-cutter.com).mp4";
import { Link } from "react-router-dom";
import speaker from "../Assets/pexels-steve-johnson-1044989.jpg";
import icon from "../Assets/newegg.png";

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
      <Link to="/shop/laptops" style={{ position: "fixed", bottom: "270px" }}>
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
      </Link>
      <div
        className="Title"
        style={{
          width: "100vw",
          height: "220px",
          color: "white",
          position: "fixed",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontStyle: "italic",
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
        <h1
          style={
            {
              /* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,900&display=swap');
            font-family: 'Work Sans', sans-serif; */
            }
          }
        >
          nuevohuevo!
        </h1>
      </div>
    </div>
  );
};

export default Home;
