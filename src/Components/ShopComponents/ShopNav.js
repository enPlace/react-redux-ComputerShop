import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";

const ShopNav = () => {
  let match = useRouteMatch();

  return (
    <nav>
      <div className="navItems">
        <h3 style={{ marginLeft: "30px" }}>Categories</h3>

        <NavLink className="shopLink"  to={`${match.url}/laptops`}>
          Laptops
        </NavLink>
        <NavLink className="shopLink" to={`${match.url}/tablets`}>
          Tablets
        </NavLink>
        <NavLink className="shopLink" to={`${match.url}/keyboards`}>
          Keyboards
        </NavLink>
        <NavLink className="shopLink" to={`${match.url}/mice`}>
          Mice
        </NavLink>
        <NavLink className="shopLink" to={`${match.url}/headphones`}>
          Headphones
        </NavLink>
      </div>
    </nav>
  );
};

export default ShopNav;
