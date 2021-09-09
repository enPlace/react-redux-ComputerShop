import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { useDispatch } from "react-redux";

const ShopNav = () => {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="navItems">
        <NavLink className="shopLink" to={`${match.url}/all`}>
          All Products
        </NavLink>
        <NavLink className="shopLink" to={`${match.url}/laptops`}>
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
