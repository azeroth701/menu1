// MenuItem.js
import React from 'react';

const MenuItem = ({ title, link }) => {
  return (
    <li className="text-white">
      <a href={link} className="hover:text-gray-300 text-white">{title}</a>
    </li>
  );
};

export default MenuItem;