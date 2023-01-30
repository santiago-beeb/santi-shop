import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import { Menu } from "@components/Menu";
import { MyOrder } from "@containers/MyOrder";
import { AppContext } from "@context/AppContext";
import icon_menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import icon_shopping_cart from "@icons/icon_shopping_cart.svg";
import { MenuMobile } from "./MenuMobile";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const { state } = useContext(AppContext);

  const onClick = () => {
    setToggle(!toggle);
    setToggleOrders(false);
  };

  const onClickToggleOrders = () => {
    setToggleOrders(!toggleOrders);
    setToggle(false);
    setToggleMobile(false);
  };

  const onClickMobile = () => {
    setToggleMobile(!toggleMobile);
    setToggleOrders(false);
  };

  return (
    <nav>
      <img
        src={icon_menu}
        alt="menu"
        className="menu"
        onClick={onClickMobile}
      />
      <div className="navbar-left">
        <a className="container_logo" href="/santi-shop/" ><img src={logo} alt="logo" className="nav-logo" /></a>
        <ul>
          <li>
            <a href="/santi-shop/">All</a>
          </li>
          <li>
            <a href="/santi-shop/">Clothes</a>
          </li>
          <li>
            <a href="/santi-shop/">Electronics</a>
          </li>
          <li>
            <a href="/santi-shop/">Furnitures</a>
          </li>
          <li>
            <a href="/santi-shop/">Toys</a>
          </li>
          <li>
            <a href="/santi-shop/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={onClick}>
            santi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={onClickToggleOrders}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleMobile && <MenuMobile />}
      {toggle && <Menu />}
      {toggleOrders && (
        <MyOrder
          toggleOrders={toggleOrders}
          setToggleOrders={setToggleOrders}
        />
      )}
    </nav>
  );
};

export { Header };
