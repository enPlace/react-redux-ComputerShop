import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectAllCartIds,
} from "../../reducers/slices/cartSlice";
import CartSummaryItem from "./CartSummaryItem";

const CartSummary = ({ cart }) => {
  const totalPrice = useSelector(selectTotalPrice);
  const cartIds = useSelector(selectAllCartIds);
  console.log(cartIds[0]);
  console.log(totalPrice);
  return (
    <div
      className="cartSummary"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "500px",
        border: "1px solid black",
        position: " fixed",
        marginTop: " 150px",
        right: "50px",
        borderRadius: "10px",
        
      }}
    >
      <div className="cartSummaryItems" style = {{overflowY:"scroll"}}  >
        {!cartIds[0] ? <div>Your cart is empty</div> : cartIds.map((id) => <CartSummaryItem id = {id} />)}
      </div>
      
      <div
        className="summaryTotal"
        style={{
          boxSizing: "border-box",
          width: "100%",
          padding: "20px",
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          backgroundColor: "red",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <div className="summaryTotalTitle">Total Price: </div>
        <div className="summaryTotalPrice">${totalPrice}</div>
      </div>
    </div>
  );
};

export default CartSummary;
