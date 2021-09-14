import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { useDispatch } from "react-redux";
import { setNewCategorySelected } from "../../reducers/slices/newCategorySelectedSlice";

const ShopNav = () => {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="navItems">
        <h3 style={{ marginLeft: "30px" }}>Categories</h3>

        <NavLink
          onClick={() => dispatch(setNewCategorySelected({ bool: true }))}
          className="shopLink"
          to={`${match.url}/laptops`}
        >
          Laptops
        </NavLink>
        <NavLink
          onClick={() => dispatch(setNewCategorySelected({ bool: true }))}
          className="shopLink"
          to={`${match.url}/tablets`}
        >
          Tablets
        </NavLink>
        <NavLink
          onClick={() => dispatch(setNewCategorySelected({ bool: true }))}
          className="shopLink"
          to={`${match.url}/keyboards`}
        >
          Keyboards
        </NavLink>
        <NavLink
          onClick={() => dispatch(setNewCategorySelected({ bool: true }))}
          className="shopLink"
          to={`${match.url}/mice`}
        >
          Mice
        </NavLink>
        <NavLink
          onClick={() => dispatch(setNewCategorySelected({ bool: true }))}
          className="shopLink"
          to={`${match.url}/headphones`}
        >
          Headphones
        </NavLink>
      </div>
    </nav>
  );
};

export default ShopNav;
