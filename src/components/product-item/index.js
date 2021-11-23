import React from 'react';

import { Button } from 'components';
import { Grid } from '@mui/material';

const ProductItem = ({ product, handleClick }) => {
  const prodName = product.name.charAt(0).toUpperCase() + product.name.slice(1);

  return (
    <Grid
      className='product-card-wrap'
      component='li'
      md={4}
      xs={12}
      sm={6}
      item
    >
      <div className='product-card'>
        <p className='product-card__category'>{product.category}</p>
        <h1 className='product-card__title'>{prodName}</h1>
        <div className='product-card__footer'>
          <p className='product-card__price'>{product.price.toFixed(2)}</p>
          <Button onClick={() => handleClick(product)}>Buy</Button>
        </div>
      </div>
    </Grid>
  );
};

export default ProductItem;
