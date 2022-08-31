import { Grid, Box } from '@chakra-ui/react';
import ProductCards from './product-card/ProductCards';
import { productMetaData } from '../../data';
import ProductHeader from './ProductHeader';

const ProductRow = () => {
  return (
    <>
      {productMetaData.map((productData, index) => {
        console.log(productData.products);
        return (
          <Box data-component='ProductRow'>
            <ProductHeader
              button={productData.button}
              heading={productData.heading}
            />
            <Grid
              as='ul'
              templateColumns='repeat(6, 1fr)'
              gridGap={{ base: 2, lg: 6 }}
              marginBottom={6}
              marginInline='calc(var(--chakra-space-4) * -1)'
              paddingInline='calc(var(--chakra-space-4) * -1)'
              overflow='hidden'
            >
              <ProductCards key={index} products={productData.products} />
            </Grid>
          </Box>
        );
      })}
    </>
  );
};

export default ProductRow;
