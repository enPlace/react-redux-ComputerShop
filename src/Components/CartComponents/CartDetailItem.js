import { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import trashIcon from "../../Assets/trash.svg"
import {
  selectItemById,
  selectItemPriceById,
  itemIncremented,
  itemDecremented,
  itemDeleted,
} from "../../reducers/slices/cartSlice";

const LoadPhoto = lazy(() => import("../LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

const CartDetailItem = ({ id }) => {
  const dispatch = useDispatch();
  const item = useSelector(selectItemById(id));
  const itemPrice = useSelector(selectItemPriceById(id))

  return (
    <div
      className="cartDetailItem"
      style={{
        boxSizing: "border-box",
        boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.315)",
        width: "100%",
        /* minWidth: "430px", */
        
        display: "flex",
        marginBottom:"30px"
      }}
    >
      <div className="col1" style={{ margin: "10px" }}>
        <Suspense fallback={loader()}>
          <LoadPhoto source={item.imgsrc} width="75px" />
        </Suspense>
      </div>
      <div className="col2" style={{ margin: "10px", padding: "10px" }}>
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>{item.name}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px 0 10px 0",
          }}
        >
          Quantity:{" "}
          <button
            onClick={() => dispatch(itemDecremented({ id }))}
            style={{ margin: "0px 10px 0 10px" }}
          >
            -
          </button>
          <div
            style={{
              border: "1px solid gray",
              padding: "0px 10px 0 10px",
            }}
          >
            {item.count}
          </div>
          <button
            onClick={() => dispatch(itemIncremented({ id }))}
            style={{ margin: "0px 10px 0 10px" }}
          >
            +
          </button>{" "}
        </div>
        <div>Price x 1 = $ {itemPrice}</div>
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
          ${itemPrice}
        </div>
        <button
          onClick={() => dispatch(itemDeleted({ id: id }))}
          style={{ marginTop: "auto", marginLeft:"auto", width: "60px" }}
        >
          <img src={trashIcon} style = {{width:"30px"}} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartDetailItem;
