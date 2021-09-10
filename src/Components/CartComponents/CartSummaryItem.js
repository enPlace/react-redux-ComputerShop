import React from "react";
import { useSelector } from "react-redux";
import { selectItemById, selectItemPriceById } from "../../reducers/slices/cartSlice";

const CartSummaryItem = ({ id }) => {
  const item = useSelector(selectItemById(id));
  const itemPrice = useSelector(selectItemPriceById(id))
  return (
    <div className="summaryItem" style = {{padding: "20px", paddingBottom:"0", boxSizing:"border-box"}} >
      <div
        className="summarymain"
        style={{ display: "flex", justifyContent: "space-between", fontWeight:"bold", fontSize: "15px", marginBottom: "5px"}}
      >
        <div style = {{width: "100px"}} >{item.name}</div>
        <div> ${itemPrice } </div>
      </div>

      
        <li>price = ${item.price}</li>
        <li>qty: {item.count} </li>
     
    </div>
  );
};

export default CartSummaryItem;
