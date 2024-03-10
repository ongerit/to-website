import React from 'react';
import'../assets/styles/utils/colors.scss';
import '../assets/styles/utils/when-than.scss';
import '../assets/styles/globals/grid.scss';

interface PromoProps {
  route: string;
}

const Promo: React.FC<PromoProps> = ({ route }) => {
  const desc = "👋 SONY, If you're looking to purchase spidermanfarfromhome.com please shoot me a message.";

  return (
    <div className="promo">
      <h1>{desc}</h1>
    </div>
  );
};

export default Promo;