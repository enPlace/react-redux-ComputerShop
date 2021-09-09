import { useSelector } from "react-redux";
import {
    selectTotalPrice,
    selectAllCartIds,
  } from "../../reducers/slices/cartSlice";
import CartDetailItem from "./CartDetailItem";
const CartDetail = ({cart}) => {
    const cartIds = useSelector(selectAllCartIds)

    return ( 
        <div
        className="cartDetail"
        style={{
          boxSizing: "border-box",
          marginTop: "150px",
          width: "calc(100% - 500px)",
          marginLeft: "100px",
          border: "1px solid black",
        }}
      >
   
        {!cartIds[0] ? <div>Your cart is empty</div> : cartIds.map((id) => <CartDetailItem id = {id} />)}
      </div>
     );
}
 
export default CartDetail ;