import React from 'react';
import '../assets/styles/components/navigation.scss';

interface NavigationProps {
  route: string; // Assuming route is a string
}

const Navigation: React.FC<NavigationProps> = ({ route }) => {
  const nav = [
    { name: 'news.', link: '/news' },
    { name: 'work.', link: '/work' },
    { name: 'clients.', link: '/clients' },
    { name: 'contact.', link: '/contact' }
  ];

  const title = 'Thomas Ongeri';
  const version = { link: 'version', current: 3 };

  return (
    <div className="navigation">
      <div className="navigation__title">
        <a href="/">{title}</a>
        <span>
          <a href={`/${version.link}`}> v.{version.current}</a>
        </span>
      </div>
      <ul style={{ display: route !== 'index' ? 'block' : 'none' }} className="navigation__links">
        {nav.map((item, index) => (
          <li key={index}>
            <a title={item.name} href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;