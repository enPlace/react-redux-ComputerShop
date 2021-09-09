import React from "react";
import { useSelector } from "react-redux";
import { selectItemById } from "../../reducers/slices/cartSlice";

const CartSummaryItem = ({ id }) => {
  const item = useSelector(selectItemById(id));
  return (
    <div className="summaryItem" style = {{padding: "20px", paddingBottom:"0", boxSizing:"border-box"}} >
      <div
        className="summarymain"
        style={{ display: "flex", justifyContent: "space-between", fontWeight:"bold", fontSize: "15px", marginBottom: "5px"}}
      >
        <div style = {{width: "100px"}} >{item.name}</div>
        <div> ${item.count * (parseFloat(item.price) *100)/100 } </div>
      </div>

      
        <li>price = ${item.price}</li>
        <li>qty: {item.count} </li>
     
    </div>
  );
};

export default CartSummaryItem;
