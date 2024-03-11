import React, { useEffect, useRef } from 'react';
import './style.scss';

const Marquee = ({ title, link, text }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const animateElement = () => {
      setTimeout(() => {
        if (marqueeRef.current) {
          marqueeRef.current.classList.add('marquee--animated');
        }
      }, 2000);
    };

    animateElement();
  }, []);

  return (
    <div className="marquee" ref={marqueeRef}>
      <h2>
        <a data-before={text} title={title} href={link}>
          <span>{title}</span>
        </a>
      </h2>
    </div>
  );
};

export default Marquee;