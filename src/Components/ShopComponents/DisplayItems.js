//Displays items from the inventory.json

import { selectInventoryByType } from "../../reducers/rootReducer";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const DisplayItems = ({ inventoryType }) => {
  const inventory = useSelector(selectInventoryByType(inventoryType));
  console.log(inventory);
  return (
    <div
      className="DisplayItems"
      style={{
        marginLeft: "300px",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "200px",
      }}
    >
      {inventory.allIds.map((key) => {
        return <ItemCard item={inventory[key]}></ItemCard>;
      })}
    </div>
  );
};

export default DisplayItems;
