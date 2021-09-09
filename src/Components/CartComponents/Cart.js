import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import {  selectCart } from "../../reducers/slices/cartSlice";
import CartDetail from "./CartDetail";
import "./Cart.css"

const Cart = () => {
    const cart = useSelector(selectCart)
  return (
    <div className="Cart" style={{ display: "flex", boxSizing: "border-box" }}>
        <CartDetail cart = {cart}></CartDetail>
        <CartSummary cart = {cart}></CartSummary>
    </div>
  );
};

export default Cart;
