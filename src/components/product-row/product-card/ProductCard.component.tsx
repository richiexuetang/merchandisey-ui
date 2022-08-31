import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DefaultText } from '../../../styles/global';
import { Product } from '../../../data';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box
      borderRadius='3px'
      minWidth='141px'
      height='auto'
      position='relative'
      marginRight={0}
    >
      <Link to='/'>
        <Flex
          flexDirection='column'
          borderColor='neutral.200'
          borderStyle=''
          borderWidth=''
        >
          <Box margin={{ base: 2, lg: 4 }}>
            <Flex
              justifyContent='center'
              width='140px'
              height='75px'
              maxW='100%'
              margin='0px auto'
            >
              <Image
                objectFit='contain'
                maxW='100%'
                src={product.imgSrc}
                alt={product.name}
              />
            </Flex>
          </Box>

          <Flex
            flexDirection='column'
            h='100%'
            padding={2}
            textAlign='left'
            position='relative'
          >
            <DefaultText
              fontSize={{ base: 'xs', md: 'sm' }}
              height={{ base: '34px', md: '40px' }}
            >
              {product.name}
            </DefaultText>
            <Flex
              flexDirection='column'
              justifyContent='space-between'
              height='100%'
            >
              <Box>
                <DefaultText textTransform='capitalize' marginTop={1}>
                  Lowest Ask
                </DefaultText>
                <DefaultText
                  fontSize={{ base: 'md', sm: 'xl' }}
                  fontWeight='bold'
                  whiteSpace='nowrap'
                  marginTop={1}
                >
                  ${product.lowest}
                </DefaultText>
              </Box>
            </Flex>

            <Flex marginTop={1}>
              <Button
                as='span'
                lineHeight='1.2'
                borderRadius={0}
                maxW='100%'
                fontWeight='normal'
                outline='transparent solid 2px'
                outlineOffset='2px'
                margin='0.25rem 0.25rem 0.25rem 0'
                minH='1.5rem'
                minW='1.5rem'
                fontSize='xs'
                paddingInlineStart={1}
                paddingInlineEnd={1}
                background='beige.100'
                height='22px'
                padding='2px 0'
              >
                <span>{product.sold} sold</span>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
};
export default ProductCard;
