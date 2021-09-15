import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectAllCartIds,
} from "../../reducers/slices/cartSlice";
import CartSummaryItem from "./CartSummaryItem";

const CartSummary = ({ cart }) => {
  const totalPrice = useSelector(selectTotalPrice);
  const cartIds = useSelector(selectAllCartIds);
  return (
    <div
      className="cartSummary"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "500px",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.615)",
        position: " fixed",
        top: " 120px",
        right: "50px",
        borderRadius: "10px",
        paddingTop: "4px"
      }}
    >
      <div className="cartSummaryItems" style={{ overflowY: "auto" }}>
        {!cartIds[0] ? (
          <h3 style={{  padding: "10px" }}>
            Your cart is empty
          </h3>
        ) : (
          cartIds.map((id) => <CartSummaryItem id={id} key = {id} />)
        )}
      </div>

      <div
        className="summaryTotal"
        style={{
          boxSizing: "border-box",
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.615)",
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
