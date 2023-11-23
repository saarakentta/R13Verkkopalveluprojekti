import React from 'react';

const Product = ({ nimi, hinta }) => {
  console.log('Rendering product:', nimi, hinta);

  return (
    <div className="tuote">
      <p>
        <strong>{nimi}</strong>
      </p>
      <p>{hinta}</p>
    </div>
  );
};

export default Product;
