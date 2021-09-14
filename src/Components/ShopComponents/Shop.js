import "./Shop.css";
import ShopNav from "./ShopNav";
import { Route, Switch, useRouteMatch } from "react-router";


import DisplayItems from "./DisplayItems";
const Shop = () => {
  let match = useRouteMatch();

  return (
    <div className="Shop">
      <ShopNav></ShopNav>

      <Switch>
        <Route path={`${match.path}/all`}>
          <DisplayItems inventoryType = "all"></DisplayItems>
        </Route>
        <Route path={`${match.path}/laptops`}>
          <DisplayItems inventoryType = "laptops"></DisplayItems>
        </Route>
        <Route path={`${match.path}/tablets`}>
          <DisplayItems inventoryType = "tablets"></DisplayItems>
        </Route>
        <Route path={`${match.path}/keyboards`}>
          <DisplayItems inventoryType = "keyboards"></DisplayItems>
        </Route>
        <Route path={`${match.path}/mice`}>
          <DisplayItems inventoryType = "mice"></DisplayItems>
        </Route>
        <Route path={`${match.path}/headphones`}>
          <DisplayItems inventoryType = "headphones"></DisplayItems>
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
