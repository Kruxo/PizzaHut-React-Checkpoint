import React from "react";

export function Navbar() {

    return (
        <nav
            className="nav-container"
        >
            <div
                className="navbar-logo"
            >
                🍕 !PizzaHut
            </div>

            <div className="navbar-links">
                <a href="#menu" className="navbar-link">Pizza</a>
                <a href="#about" className="navbar-link">Sallad</a>
                <a href="#contact" className="navbar-link">Sides</a>
            </div>
        </nav>
    );
}
