import React, { lazy, Suspense } from "react";
import { useState } from "react";
import shoppingCartIcon from "../../Assets/shopping-cart.svg";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategoryBool,
  setNewCategorySelected,
} from "../../reducers/slices/newCategorySelectedSlice";
import { itemAdded } from "../../reducers/slices/cartSlice";

const LoadPhoto = lazy(() => import("../LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const categoryBool = useSelector(selectCategoryBool);
  const [count, setCount] = useState(0);
  if (categoryBool && count !== 0) {
    setCount(0);
  }
  return (
    <div className="item" style={{}}>
      <Suspense fallback={loader()}>
        <LoadPhoto source={item.imgsrc} width="150px" />
      </Suspense>
      <h4 className="itemName">{item.name}</h4>
      <div
        className="itemInfo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
        }}
      >
        <div>{item.size}</div>
        <div>{item.ram}</div>
        <div>{item.processor}</div>
        <div>{item.storage}</div>
        <div>{item.os}</div>
        <div style={{ marginTop: "10px", fontWeight:"bolder" }}>
          $
          {parseFloat(item.price).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
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
          borderRadius: "0 0 10px 10px",
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.615)",
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
            if (count > 0) {
              dispatch(
                itemAdded({
                  ...item,
                  count,
                })
              );
              setCount(0);
            }
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
            <button
              type="button"
              onClick={() => {
                setCount(count + 1);
                dispatch(setNewCategorySelected({ bool: false }));
              }}
            >
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
            <img
              src={shoppingCartIcon}
              id="itemIcon"
              alt=""
              style={{ width: "20px" }}
            />{" "}
            Add to cart{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemCard;
