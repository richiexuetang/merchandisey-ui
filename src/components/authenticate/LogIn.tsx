import { Container, VStack, Button } from '@chakra-ui/react';

const LogIn = () => {
  console.log('login');
  return (
    <>
      <Container>
        <VStack>
          <Button>Continue With Google</Button>
          <Button>Continue With Facebook</Button>
          <Button>Continue With Apple</Button>
          <Button>Continue With Twitter</Button>
        </VStack>
      </Container>
    </>
  );
};

export default LogIn;
