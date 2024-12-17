import React from "react";
import DogCard from "./DogCard";
import "./../styles/FeatureSection.css";

function FeatureSection() {
  return (
    <section id="consul" className="features">
      <h2>Наши услуги</h2>
      <div className="feature-cards">
        <DogCard 
          title="Забота и здоровье" 
          description="Регулярные осмотры, лабораторные исследования и УЗИ помогут выявить проблемы на ранних стадиях.
            Так же лечение заболеваний, травм, а также проведение операций любой сложности" 
          image="https://i.pinimg.com/736x/dd/80/7f/dd807f511e67e73ad0e2660b091f7a99.jpg" 
        />
        <DogCard 
          title="Груминг и уход" 
          description='Услуги груминга в ветиринарном центре "The Paw Adviser" помогут вашему питомцу чувствовать себя комфртно,
              выглядетьухоженным и избежать множества проблем, связанных с шерстью и кожей.'
          image="https://i.pinimg.com/736x/bb/0e/c0/bb0ec0cd7869eb07bded763f8935d56f.jpg" 
        />
        <DogCard 
          title="Консультацию по питанию" 
          description='В ветеринарном центре "The Paw Adviser" мы предоставляем профессиональные
            консультации по питанию и содержанию, чтобы помочь вам обеспечить вашему любимцу оптимальные условия для полноценной жизни.'
          image="https://i.pinimg.com/736x/8d/8a/ce/8d8aceeb899050ffc975dcb2e000ffef.jpg    "
        />
      </div>
    </section>
  );
}

export default FeatureSection;
