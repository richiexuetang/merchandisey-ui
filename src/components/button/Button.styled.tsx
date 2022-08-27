import type { ComponentStyleConfig } from '@chakra-ui/react';
import { NoEncryption } from '@mui/icons-material';

{
  /* 
              variant='solid'
              bg='neutral.600'
              color='neutral.white'
              _hover={{
                bg: 'neutral.black',
                color: 'neutral.200',
              }}

               
//         variant='outline'
//        
//         _hover={{
//           bg: 'neutral.black',
//           color: 'neutral.white',
//         }}

//         <Text fontSize='md' letterSpacing='0.004rem' lineHeight={1.375}>
//           {items.title}
//         </Text>

{/* <Text
  fontSize='md'
  letterSpacing='0.004rem'
  lineHeight={1.375}
  color='neutral.white'
>
</Text>; */
}

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
    type: 'button',
    display: 'inline-flex',
    appearance: 'none',
  },
  variants: {
    outline: {
      bg: 'neutral.black',
      color: 'neutral.white',
    },
    solid: {},
  },
  defaultProps: {
    variant: 'outline',
  },
};
