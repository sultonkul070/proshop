import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 rounded'>
      <Link to={`/products/${product._id}`} className='card_header link-rrd'>
        <Card.Img src={product.image} variant='top' className='product-image' />
      </Link>

      <Card.Body>
        <Link to={`/products/${product._id}`} className='link-rrd'>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
