import video from "../homevid(online-video-cutter.com).mp4";
import icon from "../Assets/newegg.png";


const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <video
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
        poster="polina.jpg"
        id="bgvid"
      >
        <source src={video} type="video/mp4"></source>
      </video>

      <div
        className="Title"
        style={{
          width: "100vw",
          height: "200px",
          color: "white",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontStyle:"italic"
        }}
      >
        <div className="headerContainer"
        style = {{
            display:"flex",
            alignItems: "center"
        }} >
          <img
            src={icon}
            alt=""
            style={{
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              marginRight: "20px",
              marginTop: "10px"
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
    </div>
  );
};

export default Home;
