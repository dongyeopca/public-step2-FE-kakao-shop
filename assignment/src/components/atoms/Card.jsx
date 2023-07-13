import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ to, chilren }) => {
  return (
    <Link className="card" to={to}>
      {children}
    </Link>
  );
};

export default Card;
