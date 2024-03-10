import React, { useState, useEffect } from 'react';
import Marquee from './Marquee';
import Navigation from './Navigation';
import Promo from './Promo';
import '../assets/styles/index.scss';

const App: React.FC = () => {
  const [displayPromo, setDisplayPromo] = useState<boolean>(false);
  const [illuminate, setIlluminate] = useState<boolean>(false);

  const animateElement = () => {
    setTimeout(() => {
      setIlluminate(true);
      setTimeout(() => {
        setIlluminate(false);
      }, 500);
    });
  };

  const isPromo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const promo = urlParams.get('p');
    setDisplayPromo(promo ? true : false);
  };

  const displayBodyText = () => {
    setIlluminate(true);
    setTimeout(() => {
      setIlluminate(false);

    }, 500);
  };

  useEffect(() => {
   animateElement();
   isPromo();
  }, []);

  return (
    <section className='loaded'>
      {displayPromo && <Promo />}
      <p style={{ display: 'none' }}>{String(displayPromo)}</p>
      <Navigation />
      <div className="home">
        <p className="home__blurb">Hi! I’m Thomas Ongeri. I’m an engineering manager, from Brooklyn, New York.</p>
        <span><p></p><Marquee title='News' link='news' text='catch up on my'/></span>
        <span><p></p><Marquee title='Clients' link='clients' text='view some of my'/></span>
        <span><p></p><Marquee title='Work' link='work' text='check out my'/></span>
        <span><p></p><Marquee title='Contact' link='contact' text="and here's my"/></span>
      </div>
    </section>
  );
};

export default App;