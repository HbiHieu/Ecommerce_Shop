import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { LogoHeader } from "../../components/icons";
import CartIcon from "../../components/cart/cart-icon/cart-icon";
import CartDropdown from "../../components/cart/cart-dropDown/cart-dropDown";

import { auth } from "../../firebase/firebase.util";
import { signOut } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../redux/user/userSlice";
import { selectorUser } from "../../redux/selector";
import { Outlet } from "react-router-dom";

import "./Header.styles.scss";

const Header = () => {
  const [toggleCart, setToggleCart] = useState(false);

  const dispatch = useDispatch();

  const isLogin = useSelector(selectorUser);

  const handleSignOut = () => {
    signOut(auth);
    dispatch(userSlice.actions.setUser({}));
  };

  const handleToggleCart = () => {
    setToggleCart((prev) => !prev);
  };

  return (
    <div>
      <div className="header">
        <Link className="logo-container" to="/">
          <LogoHeader className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {isLogin ? (
            <div className="option" onClick={handleSignOut}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signInAndSignUp">
              SIGN IN
            </Link>
          )}
          {isLogin && <CartIcon handleToggleCart={handleToggleCart}></CartIcon>}
          <div>
            {toggleCart && isLogin && (
              <CartDropdown setToggleCart={setToggleCart}></CartDropdown>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
