import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">The Paw Adviser</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#consul">Услуги</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Консультация</a></li>
          <li><a href="#Footer">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
