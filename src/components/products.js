// Products.js
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Products = ({ filters, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products', {
          params: filters,
        });

        if (response.data) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, [filters]);

  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }} className='mx-5 mb-5 p-2 border-dark border-3'>
          <Card.Body>
            <Card.Img
              className='cardImg'
              style={{
                height: product.image_url ? '150px' : '110px',
                width: product.image_url ? '100%' : 'auto',
              }}
              src={product.image_url || `/images/${product.merkki}logo.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/R13W.png';
              }}
              alt=''
            />

            {(!product.image_url || product.image_url === '/images/R13W.png') ?
              <p className='h3 text-center'>Kuva tulossa</p> : ''
            }
            <Card.Title className='my-3' style={{ fontSize: '30px', fontWeight: 'bold' }}>{product.merkki}</Card.Title>
            <Card.Subtitle className='mb-2 mx-2 subtitle'>{product.malli}</Card.Subtitle>

            <dl className='row'>
              <dt className='col-sm-6'>Korimalli:</dt>
              <dd className='col-sm-6'>{product.korimalli}</dd>
              <dt className='col-sm-6'>Väri:</dt>
              <dd className='col-sm-6'>{product.vari}</dd>
              <dt className='col-sm-6'>Käyttövoima:</dt>
              <dd className='col-sm-6'>{product.kayttovoima}</dd>
              <dt className='col-sm-6'>Hinta:</dt>
              <dd className='col-sm-6'>{product.hinta} € </dd>
            </dl>

            <Button className='btn btn-secondary w-100' onClick={() => addToCart(product)}>Lisää ostoskoriin</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products;
