import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./TableComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <TableComponent />
      </div>
    );
  }
}
