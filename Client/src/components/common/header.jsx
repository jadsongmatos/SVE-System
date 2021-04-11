import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow">
      <Navbar expand="sm shadow">
        <Link to="/">
          <img
            src="/sve.svg"
            alt="Logo SVE"
            className="img-fluid ms-3"
            height="24"
            width="24"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="container navbar-nav">
            <Link to="/clientes" className="nav-link col">
              Clientes
            </Link>
            <div className="d-flex col-2 align-items-end align-items-center">
              <p>Teste</p>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
