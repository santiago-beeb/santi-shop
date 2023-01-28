import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/ProductItem.scss";
import icon_bt_add_to_cart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const onClick = item => {
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => onClick(product)}>
          <img src={icon_bt_add_to_cart} alt="" />
        </figure>
        {}
      </div>
    </div>
  );
};

export { ProductItem };
