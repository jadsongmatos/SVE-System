import React from "react";
export default function Footer() {
  return (
    <footer className="border-top col-12 shadow-lg mt-5">
      <div className="container pt-5">
        <a href="/" className="text-decoration-none text-dark">
          <figure>
            <blockquote className="blockquote">
              <p>Servico Vigilancia Eletronica</p>
              <img
                src="/sve.svg"
                alt="Logo SVE"
                className="img-fluid m-3"
                height="64"
                width="64"
              />
            </blockquote>
          </figure>
        </a>
      </div>
    </footer>
  );
}
