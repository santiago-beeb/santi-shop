import React from "react";
import "@styles/MenuMobile.scss";

const MenuMobile = () => {
  return (
    <div class="mobile-menu">
      <ul>
        <li>
          <p>CATEGORIES</p>
        </li>
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
          <a href="/santi-shop/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/santi-shop/#/account">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/santi-shop/#/account" class="email">
            santi@gmail.com
          </a>
        </li>
        <li>
          <a href="/santi-shop/#/login" class="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export { MenuMobile };
