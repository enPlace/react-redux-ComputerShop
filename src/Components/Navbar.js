import { NavLink } from "react-router-dom";
import icon from "../Assets/newegg.png";
import "./Navbar.css";
import cartIcon from "../Assets/shopping-cart.svg";
const Navbar = () => {
  return (
    <nav class = "mainNav"
      style={{
        display: "flex",
        width: "100vw",
        position:"fixed",
        alignItems: "center",
      }}
    >
      <NavLink to="/" style ={{display:"flex", alignItems:"center"}}>
        <img
          src={icon}
          alt=""
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <p
          style={{
            marginLeft: "10px",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          nuevohuevo!
        </p>
      </NavLink>
      <ul
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "20px",
          alignItems: "center",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li style={{ marginRight: "20px" }}>
          <NavLink to="/cart">
            <img
              src={cartIcon}
              alt="..."
              style={{ width: "30px", height: "30px" }}
            />{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;