import React, { useContext } from "react";
import { OrderItem } from "@components/OrderItem";
import { AppContext } from "@context/AppContext";
import "@styles/Checkout.scss";
import arrow from "@icons/flechita.svg";

const Checkout = ({ setToggle }) => {
  const { state } = useContext(AppContext);
  const today = new Date(Date.now()).toLocaleString().split(", ")[0];

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <div className="title-container" onClick={() => setToggle(false)}>
          <img src={arrow} alt="arrow" />
          <h1 className="title">My order</h1>
        </div>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>{today}</span>
              <span>{state.cart.length} articles</span>
            </p>
            <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(sumTotal())}
          </p>
          </div>
        </div>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
    </div>
  );
};

export { Checkout };
