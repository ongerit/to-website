import React, { useEffect } from 'react';
import './style.scss';

const Marquee = ({ title, link, text }) => {
  useEffect(() => {
    const animateElement = () => {
      setTimeout(() => {
        const domElement = document.querySelector('.marquee');
        const domElementName = domElement.classList[0];
        domElement.classList.add(`${domElementName}--animated`);
      }, 2000);
    };

    animateElement();
  }, []);

  return (
    <div className="marquee">
      <h2>
        <a data-before={text} title={title} href={link}>
          <span>{title}</span>
        </a>
      </h2>
    </div>
  );
};

export default Marquee;