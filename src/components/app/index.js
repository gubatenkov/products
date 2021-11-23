import React, { useState } from 'react';
import 'assets/scss/app.scss';
import { Grid } from '@mui/material';

import { Button, CustomModal, ProductItem, Spinner } from 'components';
import { useFetchProducts } from 'utils/hooks';

const url = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, isLoading, isError] = useFetchProducts(url);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleCheapestBtn = (prods) => {
    const cheapest = findCheapestProd(prods);
    if (cheapest) {
      setCurrentProduct(cheapest);
      toggleModal();
    }
  };

  const selectCurrentProduct = (prod) => setCurrentProduct(prod);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleProductItemClick = (prod) => {
    selectCurrentProduct(prod);
    toggleModal();
  };

  const findCheapestProd = (prods) => {
    let cheapest = null;

    if (prods.length) {
      cheapest = prods.reduce((acc, curr) => {
        return acc.price < curr.price ? acc : curr;
      }, {});
    }

    return cheapest !== null ? cheapest : null;
  };

  // if there any errors show placeholder
  if (isError) {
    return <div>Oops... There is an error trying to fetch products!</div>;
  }

  return (
    <div className='app'>
      <main className='content'>
        <div className='container'>
          <div className='content__inner'>
            <Grid className='product-list' component='ul' spacing={5} container>
              {/* show spinner until loading, then render items*/}
              {isLoading ? (
                <Spinner />
              ) : (
                products.map((prod, idx) => (
                  <ProductItem
                    key={idx}
                    product={prod}
                    handleClick={handleProductItemClick}
                  />
                ))
              )}
            </Grid>

            {/* show btn only when loading done and no errors */}
            {!isLoading && !isError && (
              <Button
                className='content-btn'
                onClick={() => handleCheapestBtn(products)}
              >
                Buy cheapest
              </Button>
            )}
            {/* show modal if ProductItem buy-btn was clicked */}
            <CustomModal
              currentProduct={currentProduct}
              open={isModalOpen}
              handleClose={toggleModal}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
