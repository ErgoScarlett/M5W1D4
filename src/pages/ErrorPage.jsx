import React from "react";
import { Link } from "react-router-dom";
import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter";




export default function NotFound() {
  return (
    <>
    <MyNav/>
    <div className="d-flex flex-column align-items-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Pagina non trovata.</p>
      <Link className="btn btn-primary" to="/">
        Torna alla Home
      </Link>
    </div>
    <MyFooter/>
    </>
  );
}
