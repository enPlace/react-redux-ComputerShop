import { useSelector } from "react-redux";
import { selectAllCartIds } from "../../reducers/slices/cartSlice";
import CartDetailItem from "./CartDetailItem";
const CartDetail = ({ cart }) => {
  const cartIds = useSelector(selectAllCartIds);

  return (
    <div
      className="cartDetail"
      style={{
        boxSizing: "border-box",
        marginTop: "150px",
        width: "calc(100% - 500px)",
        marginLeft: "100px",
        marginBottom: "80px"

      }}
    >
      {!cartIds[0] ? (
        <h1 style = {{borderBottom: "5px solid gray"}}>Your cart is empty</h1>
      ) : (
        cartIds.map((id) => <CartDetailItem id={id} />)
      )}
    </div>
  );
};

export default CartDetail;
