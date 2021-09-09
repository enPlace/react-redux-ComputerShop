import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import {  selectCart } from "../../reducers/slices/cartSlice";
import "./Cart.css"

const Cart = () => {
    const cart = useSelector(selectCart)
  return (
    <div className="Cart" style={{ display: "flex", boxSizing: "border-box" }}>
      <div
        className="cartDetail"
        style={{
          boxSizing: "border-box",
          marginTop: "150px",
          fontSize: "500px",
          width: "calc(100% - 500px)",

          marginLeft: "100px",
          border: "1px solid black",
        }}
      >
        A
        <br />A
      </div>
        <CartSummary cart = {cart}></CartSummary>
    </div>
  );
};

export default Cart;
