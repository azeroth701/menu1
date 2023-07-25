// Menu.js
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <MenuItem  title="Inicio" link="/" />
        <MenuItem title="Acerca de" link="/about" />
        <MenuItem title="Servicios" link="/services" />
        {/* Agrega más elementos del menú aquí */}
      </ul>
    </nav>
  );
};

export default Menu;