import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";
export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#106dfd" }}
      >
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/" style={{ color: "#FFFFFF" }}>
            Carpool
          </Link>

          <Link className="navbar-brand" to="/map" style={{ color: "#FFFFFF" }}>
            Mapa
          </Link>
        </div>
      </nav>
    </>
  );
}
