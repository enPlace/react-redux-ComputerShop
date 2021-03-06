import { NavLink } from "react-router-dom";
import icon from "../Assets/newegg.png";
import "./Navbar.css";
import cartIcon from "../Assets/shopping-cart.svg";
import { useSelector } from "react-redux";
import { selectTotalCount } from "../reducers/slices/cartSlice";
const Navbar = () => {
  const count = useSelector(selectTotalCount)
  return (
    <nav className = "mainNav"
      style={{
        display: "flex",
        top: "0",
        width: "100vw",
        position:"fixed",
        alignItems: "center",
      }}
    >
      <NavLink to="/" style ={{display:"flex", alignItems:"center", marginLeft: "20px"}}>
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
          <NavLink to="/shop/laptops">Shop</NavLink>
        </li>
        <li className = "navIcon" style={{ marginRight: "20px" }}>
          <NavLink to="/cart" style = {{color:"orange"}}>
            <img
              src={cartIcon}
              alt="..."
              style={{ width: "30px", height: "30px" }}
            />{" "}
            {count}
          </NavLink>
        </li>
      </ul> 
    </nav>
  );
};

export default Navbar;
