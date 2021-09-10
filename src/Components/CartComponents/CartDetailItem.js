import { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { selectItemById, itemDeleted } from "../../reducers/slices/cartSlice";

const LoadPhoto = lazy(() => import("../LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

const CartDetailItem = ({ id }) => {
  const dispatch = useDispatch()
  const item = useSelector(selectItemById(id));
  return (
    <div
      className="cartDetailItem"
      style={{
        boxSizing: "border-box",
        
        width: "100%",
        display: "flex",
      }}
    >
      <div className="col1" style={{ margin: "10px" }}>
        <Suspense fallback={loader()}>
          <LoadPhoto source={item.imgsrc} width="75px" />
        </Suspense>
      </div>
      <div className="col2" style={{ margin: "10px", padding: "10px" }}>
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>{item.name}</div>
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0 10px 0" }}>
          Quantity: <button style={{ margin: "0px 10px 0 10px" }}>-</button>
          <div
            style={{
              border: "1px solid black",
              padding: "0px 10px 0 10px",
            }}
          >
            {item.count}
          </div>
          <button style={{ margin: "0px 10px 0 10px" }}>+</button>{" "}
        </div>
        <div>Price x 1 ={item.price}</div>
      </div>
      <div
        className="col3"
        style={{
          marginLeft: "auto",
          justifyContent: "space-around",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginLeft: "auto" }}>
          {" "}
          ${(item.count * (parseFloat(item.price) * 100)) / 100}{" "}
        </div>
        <button onClick = {()=>dispatch(itemDeleted({id:id}))}  style={{ marginTop: "auto" }}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CartDetailItem;
