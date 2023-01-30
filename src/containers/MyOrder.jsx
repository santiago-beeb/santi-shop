import React, { useContext, useState } from "react";
import { OrderItem } from "@components/OrderItem";
import { AppContext } from "@context/AppContext";
import { Checkout } from "@pages/Checkout";
import "@styles/MyOrder.scss";
import icon_fechita from "@icons/flechita.svg";
import { Orders } from "../pages/Orders";

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const [toggle, setToggle] = useState(false);
  const [toggleO, setToggleO] = useState(false);
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img
          src={icon_fechita}
          alt="arrow"
          onClick={() => setToggleOrders(!toggleOrders)}
        />
        <p onClick={() => setToggleOrders(!toggleO)} className="title">
          My order
        </p>
      </div>
      <div className="my-order-content">
        <div className="cart-product-list">
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(sumTotal())}
          </p>
        </div>
        <button onClick={() => setToggle(true)} className="primary-button">
          Checkout
        </button>
      </div>
      {toggle && <Checkout setToggle={setToggle} />}
      {toggleO && <Orders setToggle={setToggleO} />}
    </aside>
  );
};

export { MyOrder };
