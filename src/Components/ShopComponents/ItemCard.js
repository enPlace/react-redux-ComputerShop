import React, { lazy, Suspense } from "react";
import { useState } from "react";
import shoppingCartIcon from "../../Assets/shopping-cart.svg";
import { CircularProgress } from "@material-ui/core";


const LoadPhoto = lazy(() => import("../LoadPhoto"));
const loader = () => <CircularProgress></CircularProgress>;

const ItemCard = ({item}) => {
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
              <LoadPhoto source={item.imgsrc} />
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
              <div style={{ marginTottom: "auto" }}>
                ${item.price}
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
                }}
              >
                {" "}
                <div className="cartFormDisplay" style={{ display: "flex" }}>
                  <button type="button">-</button>
                  <input
                    style={{ width: "20px", textAlign: "center" }}
                    type="text"
                    placeholder="0"
                  />
                  <button type="button">+</button>
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
                    alt=""
                    style={{ width: "20px" }}
                  />{" "}
                  Add to cart{" "}
                </button>
              </form>
            </div>
          </div>
     );
}
 
export default ItemCard;