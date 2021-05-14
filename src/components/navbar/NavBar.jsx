import React, { Component } from "react";
import { menuItems } from "./menu-items";
import "../navbar/NavBar.css";

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.state);
  };

  render() {
    return (
      <nav className="NavBar-Items">
        <h1 className="NavBar-logo">
          <i className="fab fa-cuttlefish"></i>
        </h1>
        <div className="menue-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={"nav-links"} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
