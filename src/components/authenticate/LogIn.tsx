import {
  Container,
  VStack,
  Button,
  Box,
  HStack,
  Divider,
  Text,
  Input,
  Flex,
  Stack,
  FormControl,
  Link,
  FormLabel,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { Twitter, Facebook, Apple, Google } from '@mui/icons-material';

const LogIn = () => {
  return (
    <Box
      data-component='page-container'
      bg='#fafafa'
      w='full'
      paddingTop='90px'
      minH='100vh'
      overflowY='hidden'
    >
      <Box data-compnent='login-body' w='full' paddingBottom='0px'>
        <Container
          padding='0'
          bg='white'
          maxW='400px'
          border='solid 1px #e0e0e0'
          borderRadius='4.5px'
          h='605px'
        >
          <HStack
            data-component='toggle-buttons'
            flexWrap='wrap'
            h='50px'
            margin='6px 16px 0px 16px'
          >
            <Button variant='accessToggle' flex='1'>
              Sign Up
            </Button>
            <Button variant='accessToggle' flex='1'>
              Log In
            </Button>
          </HStack>

          <Box data-component='tab-container' padding='16px'>
            <VStack>
              <Button leftIcon={<Google />} variant='continue'>
                Continue With Google
              </Button>
              <Button leftIcon={<Facebook />} variant='continue'>
                Continue With Facebook
              </Button>
              <Button leftIcon={<Apple />} variant='continue'>
                Continue With Apple
              </Button>
              <Button leftIcon={<Twitter />} variant='continue'>
                Continue With Twitter
              </Button>

              <Stack
                direction='row'
                w='full'
                alignItems='center'
                marginTop='8px'
              >
                <Divider
                  orientation='horizontal'
                  opacity='1'
                  w='100%'
                  borderWidth='0px 0px 1px'
                />
                <Text variant='authentication'>OR</Text>
                <Divider
                  orientation='horizontal'
                  opacity='1'
                  w='100%'
                  borderWidth='0px 0px 1px'
                />
              </Stack>

              <Stack w='full'>
                {/* Email Address Form Field */}
                <FormControl variant='floating'>
                  <Input placeholder=' ' autoComplete='off' />
                  <FormLabel>Email Address</FormLabel>
                </FormControl>

                {/* Password Form Field */}
                <FormControl variant='floating'>
                  <Input placeholder=' ' autoComplete='off' />
                  <FormLabel>Password</FormLabel>
                </FormControl>

                <Flex justifyContent='flex-end'>
                  <Text
                    variant='authentication'
                    fontSize='12px'
                    marginBottom='24px'
                  >
                    <Link as={ReachLink} to='/'>
                      Forgot Password?
                    </Link>
                  </Text>
                </Flex>
              </Stack>

              <VStack w='full'>
                <Button variant='authentication'>Log In</Button>
                <Flex margin='8px 0 12px 0'>
                  <Text
                    variant='authentication'
                    fontSize='12px'
                    marginBottom='24px'
                  >
                    By logging in, you agree to the Terms of Service and Privacy
                    Policy
                  </Text>
                </Flex>
              </VStack>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LogIn;
