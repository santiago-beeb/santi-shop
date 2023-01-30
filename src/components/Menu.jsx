import React from "react";
import "@styles/Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/santi-shop/#/orders" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/santi-shop/#/account">My account</a>
        </li>
        <li>
          <a href="/santi-shop/#/login">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
