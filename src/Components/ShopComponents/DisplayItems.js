//Displays items from the inventory.json
import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import { selectInventoryByType } from "../../reducers/rootReducer";
import { useSelector } from "react-redux";
const LoadPhoto = lazy(() => import("../LoadPhoto"));


const loader = () => <div>Loading</div>;
const DisplayItems = ({inventoryType}) => {
  const inventory = useSelector(selectInventoryByType(inventoryType))
  console.log(inventory)
  return (
    <div className = "DisplayItems" style = {{
      marginLeft: "300px",
      display:"flex", 
      flexWrap:"wrap",
      marginTop: "200px"
    }}>
      {/* {tablets.allIds.map((key) => {
        return (
          <Suspense fallback={loader()}>
            <LoadPhoto source={tablets[key].imgsrc} />
            <div>{tablets[key].name}</div>
          </Suspense>
        );
      })}  */}
    </div>
  );
};

export default DisplayItems;
