import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoSilver,  close } from "../utils/Lists";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [expand, setExpand] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Sell", path: "/Sell" },
    { label: "Supply", path: "/Supply" },
    { label: "About Us", path: "/AboutUs" },
    { label: "Contact Us", path: "/ContactUs" },
    { label: "Login", path: "/login" },
  ];

  const openMenu = () => {
    setShowMenu(true);
    setExpand(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setTimeout(() => {
      setExpand(false);
    }, 400);
  };

  const NavbarLogo = ({ logo }) => (
    <Link to="/" onClick={closeMenu}>
   
      <h1 className="nav-logo"><span className="Logo__span">GAD</span>o</h1>
    </Link>
  );

  const MenuItem = ({ label, path, additionalClasses, style }) => (
    <NavLink
      className={`nav-link ${additionalClasses}`}
      // activeclassName="selected-nav-link"
      to={path}
      // exact={`${exact}`}
      onClick={closeMenu}
      style={style}
    >
      <p>{label}</p>
      <div />
    </NavLink>
  );

  const Navigations = ({ additionalClasses = "" }) => {
    let inc = 0;
    return (
      <div className="navigations">
        {links.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            path={item.path}
            additionalClasses={additionalClasses}
            style={{ animationDelay: `${(inc += 0.09)}s` }}
          />
        ))}
      </div>
    );
  };

  const BurgerMenu = () => (
    <div className="burger-menu" onClick={openMenu} >
      <div />
      <div />
      <div />
      {/* <div /> */}
    </div>
  );

  return (
    <>
      <div className="navbar">
        <NavbarLogo logo={logoSilver} />
        <Navigations />
        <BurgerMenu />
      </div>

      {expand && (
        <>
          <div
            className={`back-overlay ${showMenu ? "fade-in" : "fade-out"}`}
            onClick={closeMenu}
          />
          <div
            className={`sliding-menu ${
              showMenu ? "slide-in-left" : "slide-out-left"
            }`}
          >
            <img src={close} alt="" onClick={closeMenu} className="closeIcon"/>
            <Navigations
              additionalClasses={showMenu ? "slide-up" : "slide-down"}
            />
            <button className="btn-gold"> <Link to="/sign-up">Sign Up</Link></button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
