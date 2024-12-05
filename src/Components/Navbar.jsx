import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {

    return (
        <nav
            className="nav-container"
        >
            <div
                className="navbar-logo"
            >
                <NavLink to="/" className="navbar-link" >🍕 !PizzaHut</NavLink>
            </div>

            <div className="navbar-links">
                <NavLink to="/pizza" className="navbar-link">
                    Pizza
                </NavLink>
                <NavLink to="/sallad" className="navbar-link">
                    Sallad
                </NavLink>
                <NavLink to="/sides" className="navbar-link">
                    Sides
                </NavLink>
            </div>
        </nav>
    );
}
