import React from 'react';
import "./../styles/About.css";

const AboutUs = () => {
  return (
    <section id='about' className="about-us">
      <div className="about-content">
        <img 
          src="https://i.pinimg.com/736x/49/ae/43/49ae43f781123a739716734b73e1e541.jpg" 
          alt="Mover Image" 
          className="about-img" 
        />
        <div className="about-text">
          <h2 className='onas'>О нас</h2>
          <p>
          Добро пожаловать в The Paw Adviser! Мы — это ветеринарная клиника, которая заботится о здоровье ваших пушистых друзей. Наша команда опытных и заботливых специалистов понимает, что питомцы — это не просто животные, а настоящие члены семьи. <br></br>
          В The Paw Adviser мы предлагаем широкий спектр услуг для поддержания здоровья вашего питомца: от регулярных осмотров и вакцинации до сложных процедур и экстренной помощи. Мы используем самые современные технологии и медицинские разработки, чтобы предложить индивидуальный подход, соответствующий потребностям каждого питомца.
          </p>
          <button className="about-button"><a className='contactе' href="https://wa.me/996704121248" target="_blank" rel="noopener noreferrer">
  Связяться
</a>
</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
