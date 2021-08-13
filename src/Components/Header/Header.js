import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.NavigationItems}>
        <div>
          <NavLink
            to="/"
            className={classes.NavigationItem}
            activeStyle={{ "boxShadow": "0 0 10px 0px var(--clr-red)" }}
            exact
          >
            ToDo
          </NavLink>
        </div>
      </div>
      <div className={classes.NavigationItems}>
        <NavLink
          to="users"
          className={classes.NavigationItem}
          activeStyle={{ "boxShadow": "0 0 10px 0px var(--clr-red)" }}
          exact
        >
          Users
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
