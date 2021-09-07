import { useSelector, useDispatch } from "react-redux";
import {
  selectTablets,
  selectLaptops,
  selectAccessories,
} from "./reducers/inventory";
import { selectCart } from "./reducers/rootReducer";
import {
  itemAdded,
  itemDeleted,
  itemIncremented,
  itemDecremented,
  quantityChanged
} from "./reducers/slices/cartSlice";

const Test = () => {
  const dispatch = useDispatch();
  const tablets = useSelector(selectTablets);
  const laptops = useSelector(selectLaptops);
  const accessories = useSelector(selectAccessories);
  const cart = useSelector(selectCart);

  console.log(tablets);
  console.log(laptops);
  console.log(accessories);
  console.log(cart);
  return (
    <div className="test">
      <button
        onClick={() =>
          dispatch(
            itemAdded({
              id: "Fire",
              name: "Fire HD 8",
              size: '8"',
              storage: "32 GB",
              price: "59.99",
              img: "",
              quantity: 1,
            })
          )
        }
      >
        add
      </button>
      <button
        onClick={() =>
          dispatch(
            itemAdded({
              id: "Fire",
              name: "Fire HD 8",
              size: '8"',
              storage: "32 GB",
              price: "59.99",
              img: "",
              quantity: 3,
            })
          )
        }
      >
        add3
      </button>
      <button onClick={() => dispatch(itemIncremented({ id: "Fire" }))}>
        increment
      </button>
      <button onClick={() => dispatch(itemDecremented({ id: "Fire" }))}>
        itemDecremented
      </button>
      <button onClick={() => dispatch(itemDeleted({ id: "Fire" }))}>
        delete
      </button>
      <button onClick = {()=>{dispatch(quantityChanged({id:"Fire", quantity:4}))}} >ChangeQuantity to 4 </button>
    </div>

  );
};

export default Test;
