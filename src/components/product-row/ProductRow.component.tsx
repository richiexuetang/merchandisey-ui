import { ArrowForwardIcon, QuestionIcon } from '@chakra-ui/icons';
import { Button, Heading, Link, Image, Text } from '@chakra-ui/react';
import * as Styled from './ProductRow.styles';
import { Link as ReachLink } from 'react-router-dom';

const ProductRow = () => {
  return (
    <div>
      <Styled.ProductRow>
        <Heading fontWeight={500} fontSize='lg' lineHeight='lg' minHeight='0vw'>
          Trending Sneakers
          <Button
            w={4}
            height={4}
            // display='inline-block'
            lineHeight='1em'
            flexShrink={0}
            verticalAlign='-0.125em'
            bg='transparent'
          >
            <QuestionIcon />
          </Button>
        </Heading>
        <Link as={ReachLink} to='/sneakers'>
          <Button
            rightIcon={<ArrowForwardIcon />}
            display='inline-flex'
            alignItems='center'
            color='green.700'
            verticalAlign='baseline'
            width='auto'
            lineHeight='normal'
            paddingInline='1rem'
            bg='transparent'
            padding='0.375rem'
            h='34px'
          >
            See All
          </Button>
        </Link>
      </Styled.ProductRow>
      <Styled.SmartGridRow>
        <li>
          <Styled.SmartGridWrapper>
            <Link as={ReachLink} to='/adidas-yeezy-foam-rnnr-sand'>
              <Styled.SmartGridProductDiv>
                <Styled.SmartGridProductInnerDiv1>
                  <Image
                    objectFit='contain'
                    maxWidth='100%'
                    src='https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1617991585&q=75'
                    alt='adidas Yeezy Foam RNNR Sand'
                  />
                </Styled.SmartGridProductInnerDiv1>
                <Styled.SmartGridProductInnerDiv2>
                  <Styled.SmartGridProductInnerDiv2Child1>
                    <Text>Lowest Ask</Text>
                    <Text>$151</Text>
                  </Styled.SmartGridProductInnerDiv2Child1>
                  <Styled.SmartGridProductInnerDiv2Child2>
                    <span>
                      <span>1711 sold</span>
                    </span>
                  </Styled.SmartGridProductInnerDiv2Child2>
                </Styled.SmartGridProductInnerDiv2>
              </Styled.SmartGridProductDiv>
            </Link>
          </Styled.SmartGridWrapper>
        </li>
        {/* 2nd Product in product row */}
        <li>
          <Styled.SmartGridWrapper>
            <Link
              as={ReachLink}
              to='/adidas-forum-buckle-low-bad-bunny-blue-tint'
            >
              <Styled.SmartGridProductDiv>
                <Styled.SmartGridProductInnerDiv1>
                  <Image
                    objectFit='contain'
                    maxWidth='100%'
                    src='https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1617991585&q=75'
                    alt='adidas forum buckle low bad bunny blue tint'
                  />
                </Styled.SmartGridProductInnerDiv1>
                <Styled.SmartGridProductInnerDiv2>
                  <Styled.SmartGridProductInnerDiv2Child1>
                    <Text>Lowest Ask</Text>
                    <Text>$151</Text>
                  </Styled.SmartGridProductInnerDiv2Child1>
                  <Styled.SmartGridProductInnerDiv2Child2>
                    <span>
                      <span>1711 sold</span>
                    </span>
                  </Styled.SmartGridProductInnerDiv2Child2>
                </Styled.SmartGridProductInnerDiv2>
              </Styled.SmartGridProductDiv>
            </Link>
          </Styled.SmartGridWrapper>
        </li>
        {/* 3rd Product in product row */}
        <li>
          <Styled.SmartGridWrapper>
            <Link
              as={ReachLink}
              to='/asics-gel-kayano-14-jjjjound-silver-black'
            >
              <Styled.SmartGridProductDiv>
                <Styled.SmartGridProductInnerDiv1>
                  <Image
                    objectFit='contain'
                    maxWidth='100%'
                    src='https://images.stockx.com/images/ASICS-Gel-Kayano-14-JJJJound-Silver-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1651111540&q=75'
                    alt='asics gel kayano 14 jjjjound silver black'
                  />
                </Styled.SmartGridProductInnerDiv1>
                <Styled.SmartGridProductInnerDiv2>
                  <Styled.SmartGridProductInnerDiv2Child1>
                    <Text>Lowest Ask</Text>
                    <Text>$151</Text>
                  </Styled.SmartGridProductInnerDiv2Child1>
                  <Styled.SmartGridProductInnerDiv2Child2>
                    <span>
                      <span>1711 sold</span>
                    </span>
                  </Styled.SmartGridProductInnerDiv2Child2>
                </Styled.SmartGridProductInnerDiv2>
              </Styled.SmartGridProductDiv>
            </Link>
          </Styled.SmartGridWrapper>
        </li>
        {/* 4th Product in product row */}
        <li>
          <Styled.SmartGridWrapper>
            <Link
              as={ReachLink}
              to='/asics-gel-kayano-14-jjjjound-silver-white'
            >
              <Styled.SmartGridProductDiv>
                <Styled.SmartGridProductInnerDiv1>
                  <Image
                    objectFit='contain'
                    maxWidth='100%'
                    src='https://images.stockx.com/images/ASICS-Gel-Kayano-14-JJJJound-Silver-White.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1651111545&q=75'
                    alt='asics gel kayano 14 jjjjound silver white'
                  />
                </Styled.SmartGridProductInnerDiv1>
                <Styled.SmartGridProductInnerDiv2>
                  <Styled.SmartGridProductInnerDiv2Child1>
                    <Text>Lowest Ask</Text>
                    <Text>$151</Text>
                  </Styled.SmartGridProductInnerDiv2Child1>
                  <Styled.SmartGridProductInnerDiv2Child2>
                    <span>
                      <span>1711 sold</span>
                    </span>
                  </Styled.SmartGridProductInnerDiv2Child2>
                </Styled.SmartGridProductInnerDiv2>
              </Styled.SmartGridProductDiv>
            </Link>
          </Styled.SmartGridWrapper>
        </li>
        {/* 5th Product in product row */}
        <li>
          <Styled.SmartGridWrapper>
            <Link
              as={ReachLink}
              to='/crocs-pollex-clog-by-salehe-bembury-cobbler'
            >
              <Styled.SmartGridProductDiv>
                <Styled.SmartGridProductInnerDiv1>
                  <Image
                    objectFit='contain'
                    maxWidth='100%'
                    src='https://images.stockx.com/images/Crocs-Pollex-Clog-by-Salehe-Bembury-Orange.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660197683&q=75'
                    alt='Crocs Pollex Clog by Salehe Bembury Cobbler'
                  />
                </Styled.SmartGridProductInnerDiv1>
                <Styled.SmartGridProductInnerDiv2>
                  <Styled.SmartGridProductInnerDiv2Child1>
                    <Text>Lowest Ask</Text>
                    <Text>$151</Text>
                  </Styled.SmartGridProductInnerDiv2Child1>
                  <Styled.SmartGridProductInnerDiv2Child2>
                    <span>
                      <span>1711 sold</span>
                    </span>
                  </Styled.SmartGridProductInnerDiv2Child2>
                </Styled.SmartGridProductInnerDiv2>
              </Styled.SmartGridProductDiv>
            </Link>
          </Styled.SmartGridWrapper>
        </li>
        {/* 6th Product in product row */}
        <li>
          <Styled.SmartGridWrapper>
            <Link as={ReachLink} to='//nike-air-ship-a-ma-maniere-game-royal'>
              <Styled.SmartGridProductDiv>
                <Styled.SmartGridProductInnerDiv1>
                  <Image
                    objectFit='contain'
                    maxWidth='100%'
                    src='https://images.stockx.com/images/Nike-Air-Ship-A-Ma-Maniere-Game-Royal.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661236443&q=75'
                    alt='Nike Air Ship A Ma Maniére Game Royal'
                  />
                </Styled.SmartGridProductInnerDiv1>
                <Styled.SmartGridProductInnerDiv2>
                  <Styled.SmartGridProductInnerDiv2Child1>
                    <Text>Lowest Ask</Text>
                    <Text>$151</Text>
                  </Styled.SmartGridProductInnerDiv2Child1>
                  <Styled.SmartGridProductInnerDiv2Child2>
                    <span>
                      <span>1711 sold</span>
                    </span>
                  </Styled.SmartGridProductInnerDiv2Child2>
                </Styled.SmartGridProductInnerDiv2>
              </Styled.SmartGridProductDiv>
            </Link>
          </Styled.SmartGridWrapper>
        </li>
      </Styled.SmartGridRow>
    </div>
  );
};

export default ProductRow;
