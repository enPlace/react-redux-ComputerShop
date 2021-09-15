//Displays items from the inventory.json

import { selectInventoryByType } from "../../reducers/rootReducer";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const DisplayItems = ({ inventoryType }) => {
  const inventory = useSelector(selectInventoryByType(inventoryType));
  return (
    <div
      className="DisplayItems"
      style={{
        marginLeft: "300px",
        marginBottom: "80px",
       
      
      }}
    >
      <div
        className="displayInventory"
        style={{ display: "flex", flexWrap: "wrap", marginTop: "100px" }}
      >
        {inventory.allIds.map((key) => {
          return <ItemCard item={inventory[key]} key = {key}></ItemCard>;
        })}
      </div>
    </div>
  );
};

export default DisplayItems;
