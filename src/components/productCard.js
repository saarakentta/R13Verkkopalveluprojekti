import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem'}} className='mx-4 my-2 border-dark border-2'>
      <Card.Body>
        <Card.Img className='w-100 mb-3 float-right' src={product.image_url} alt='Kuva tulossa' />
        <Card.Title>{product.merkki}</Card.Title>
        <Card.Text>
          Malli: {product.malli}<br />
          Korimalli: {product.korimalli}<br />
          Väri: {product.väri} <br />
          Käyttövoima: {product.käyttövoima} <br />
          Hinta: {product.hinta} €
        </Card.Text>
        <Button className='btn btn-secondary w-100'>Osta nyt</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;