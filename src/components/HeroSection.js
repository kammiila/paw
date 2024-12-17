import React from "react";
import "./../styles/HeroSection.css";

function HeroSection() {
  return (
    <section id="HeroSection" className="hero">
      <div className="hero-text">
      <h1>Добро пожаловать в ветеринарый центр<span className='highlight'><br></br>"The Paw Adviser"</span></h1>
        <p>Мы предлагаем лучшие услуги для ваших питомцев!</p>
        <button><a className='asasc' href="https://www.youtube.com/watch?v=-rnx-I2HROg&t=13s" target="_blank" rel="noopener noreferrer">
  Узнать больше
</a></button>
      </div>
      <div className="hero-image">
        <img src="https://i.pinimg.com/736x/19/df/01/19df0120832618fc6dafc6db9aa02757.jpg" alt="Dog" />
      </div>
    </section>
  );
}

export default HeroSection;
