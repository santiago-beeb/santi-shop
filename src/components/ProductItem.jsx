import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/ProductItem.scss";
import icon_bt_add_to_cart from "@icons/bt_add_to_cart.svg";
import icon_bt_added_to_cart from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);
  const [toggleIconCart, setToggleIconCart] = useState(false)

  useEffect(() => {
    if (state.lastIdRemoved === product.id) {
      setToggleIconCart(false)
    }
  }, [state.lastIdRemoved])

  useEffect(() => {
    if (state.cart.some(({ id }) => id === product.id)) {
      setToggleIconCart(true)
    }
  }, [])

  const onClick = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

  const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

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
        { itsProductAdded() ? (
        <img src={icon_bt_added_to_cart} alt="" />
      ) : (
        <img src={icon_bt_add_to_cart} alt="" />
      )}
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
