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
        marginBottom:"80px"
      }}
    >
{/*       <div
        className="categoryTitle"
        
      >
        <h2 style = {{margin: "0", marginTop: "auto", width: "250px", borderBottom: "6px solid rgba(3, 0, 90, 0.932)"}}>
          {inventoryType.charAt(0).toUpperCase() + inventoryType.slice(1)}
        </h2>
      </div> */}
      <div
        className="displayInventory"
        style={{ display: "flex", flexWrap: "wrap", marginTop: "100px"}}
      >
        {inventory.allIds.map((key) => {
          return <ItemCard item={inventory[key]}></ItemCard>;
        })}
      </div>
    </div>
  );
};

export default DisplayItems;
