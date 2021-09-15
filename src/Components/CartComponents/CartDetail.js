import { useSelector } from "react-redux";
import {
  selectAllCartIds,
  selectTotalPrice,
} from "../../reducers/slices/cartSlice";
import CartDetailItem from "./CartDetailItem";
const CartDetail = ({ cart }) => {
  const cartIds = useSelector(selectAllCartIds);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div
      className="cartDetail"
      style={{
        boxSizing: "border-box",
        marginTop: "150px",
        width: "calc(100% - 500px)",
        marginLeft: "100px",
        marginBottom: "80px",
      }}
    >
      {!cartIds[0] ? (
        <h1 style={{ borderBottom: "5px solid gray" }}>Your cart is empty</h1>
      ) : (
        <div className="yourCart">
          <h1 style={{ borderBottom: "5px solid gray" }}>Your cart</h1>
          {cartIds.map((id) => <CartDetailItem id={id} key = {id} />)}
        </div>
        
      )}
      <div
        className="detailTotal"
        style={{
          textAlign: "end",
          fontWeight: "bolder",
          boxSizing: "border-box",
          boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.315)",
          borderBottom:"5px solid gray",
          padding: "20px",
        }}
      >
        Total: $ {totalPrice}{" "}
      </div>
    </div>
  );
};

export default CartDetail;
