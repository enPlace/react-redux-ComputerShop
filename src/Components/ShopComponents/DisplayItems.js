//Displays items from the inventory.json
import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import { selectAccessories } from "../../reducers/inventory";
import { selectLaptops } from "../../reducers/inventory";
import { selectTablets } from "../../reducers/inventory";
import { useSelector } from "react-redux";
const LoadPhoto = lazy(() => import("../LoadPhoto"));


const loader = () => <div>Loading</div>;
const DisplayItems = () => {
  const accessories = useSelector(selectAccessories);
  const laptops = useSelector(selectLaptops)
  const tablets = useSelector(selectTablets)
  console.log(laptops)

  return (
    <div className = "DisplayItems" style = {{
      marginLeft: "300px",
      display:"flex", 
      flexWrap:"wrap",
      marginTop: "200px"
    }}>
      {tablets.allIds.map((key) => {
        return (
          <Suspense fallback={loader()}>
            <LoadPhoto source={tablets[key].imgsrc} />
            <div>{tablets[key].name}</div>
          </Suspense>
        );
      })} 
    </div>
  );
};

export default DisplayItems;
