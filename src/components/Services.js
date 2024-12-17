import React from 'react';
import "./../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="our-services">
      <h2 className='serviz'>Как проходит консультация?</h2>
      <p>Консультация в ветеринарной клинике обычно проходит следующим образом:</p>
      <div className="services-cards">
        <div className="service-card">
          <img 
            src="https://i.pinimg.com/736x/05/c4/6b/05c46b9182cc90ea6cbb71fc68828d48.jpg" 
            alt="Local Moving" 
          />
          <h3>Регистрация</h3>
          <p>Владелец животного заполняет данные о питомце и описывает проблему.
          </p>
        </div>
        <div className="service-card">
          <img 
            src="https://i.pinimg.com/736x/a3/36/1e/a3361e143b5b58f05007aaceeee6b089.jpg" 
            alt="Long Distance Moving" 
          />
          <h3>Осмотр:</h3>
          <p>Ветеринар проводит визуальный осмотр и собирает анамнез (историю болезни).</p>
        </div>
        <div className="service-card">
          <img 
            src="https://i.pinimg.com/736x/ef/f7/96/eff7962a2b9898d6f936de6332e7d513.jpg" 
            alt="Commercial Moving" 
          />
          <h3>Назначение лечения:</h3>
          <p>Врач объясняет диагноз и предлагает варианты лечения.</p>
        </div>
        <div className="service-card">
          <img 
            src="https://i.pinimg.com/736x/2f/a4/a3/2fa4a33db006f4f16c06ff292d376242.jpg" 
            alt="Truck Rental" 
          />
          <h3>Рекомендации:</h3>
          <p>Владелец получает инструкции по уходу и расписание повторных визитов.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
