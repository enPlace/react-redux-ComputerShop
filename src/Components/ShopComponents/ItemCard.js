import React, { lazy, Suspense } from "react";
import { useState } from "react";
import shoppingCartIcon from "../../Assets/shopping-cart.svg";
import { CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { itemAdded } from "../../reducers/slices/cartSlice";

const LoadPhoto = lazy(() => import("../LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <div
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "200px",
        minHeight: "300px",
        textAlign: "center",
        margin: "10px",
        padding: "20px",
        paddingBottom: "0",

      }}
    >
      <Suspense fallback={loader()}>
        <LoadPhoto source={item.imgsrc} width = "150px" />
      </Suspense>
      <div
        className="itemInfo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>{item.name}</h4>
        <div>{item.size}</div>
        <div>{item.ram}</div>
        <div>{item.processor}</div>
        <div>{item.storage}</div>
        <div>{item.os}</div>
        <div style={{ marginTottom: "auto" }}>${item.price}</div>
      </div>
      <div
        className="cartManager"
        style={{
          width: "120%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "0 0 10px 10px"
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(itemAdded({
                ...item,
                count
            }))
            setCount(0)
            
          }}
        >
          {" "}
          <div className="cartFormDisplay" style={{ display: "flex" }}>
            <button
              type="button"
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              -
            </button>
            <input
              style={{ width: "20px", textAlign: "center" }}
              type="text"
              placeholder="0"
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
            <button type="button" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
          <button
            type="submit"
            style={{
              marginTop: "10px",
              fontSize: "20px",
              /* color: "white", */
              border: "none",
              backgroundColor: "white",
            }}
          >
            <img src={shoppingCartIcon} alt="" style={{ width: "20px" }} /> Add
            to cart{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemCard;
