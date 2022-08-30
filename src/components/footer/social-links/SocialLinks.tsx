import {
  Box,
  Spacer,
  VStack,
  Text,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react';
import * as Styled from './SocialLinks.styles';
import {
  Twitter,
  Instagram,
  Facebook,
  YouTube,
  Apple,
  Android,
} from '@mui/icons-material';

const SocialLinks = () => {
  return (
    <Styled.FlexContainer direction='row'>
      <Styled.LRCContainer>
        <Styled.LRCButton aria-label='United States | English | $ USD'>
          <span>United States</span>
          <span>|</span>
          <span>English</span>
          <span>|</span>
          <span>$USD</span>
        </Styled.LRCButton>
      </Styled.LRCContainer>
      <Spacer />

      <VStack>
        <Box>
          <Text color='neutral.white'>Find Us On Social</Text>
          <List display='flex' flexDirection='row'>
            <ListItem>
              <Icon as={Twitter} color='white' />
            </ListItem>
            <ListItem>
              <Icon as={Facebook} color='white' />
            </ListItem>
            <ListItem>
              <Icon as={Instagram} color='white' />
            </ListItem>
            <ListItem>
              <Icon as={YouTube} color='white' />
            </ListItem>
          </List>
        </Box>
      </VStack>

      <Spacer />
      <VStack>
        <Box>
          <Text color='neutral.white'>Download Our App</Text>
          <List display='flex' flexDirection='row'>
            <ListItem>
              <Icon as={Apple} color='white' />
            </ListItem>
            <ListItem>
              <Icon as={Android} color='white' />
            </ListItem>
          </List>
        </Box>
      </VStack>
      <Spacer />
      <Box>
        <Text color='white'>Use Assistive Technology</Text>
      </Box>
      <Spacer />
      <Box>
        <Text color='white'>Proudly Built in Detroit</Text>
      </Box>
    </Styled.FlexContainer>
  );
};
export default SocialLinks;
