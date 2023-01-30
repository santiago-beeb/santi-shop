import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/OrderItem.scss";
import icon_close from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const onClick = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <img
        className="x"
        src={icon_close}
        alt="close"
        onClick={() => onClick(product)}
      />
    </div>
  );
};

export { OrderItem };
