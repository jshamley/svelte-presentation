// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Svelte
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            The magical disappearing UI framework.
          </Text>
          <Text margin="140px 0 0" size={1}>
            <span style={{ float: 'left' }}>Jeff Shamley</span>
            <span style={{ float: 'right' }}>@jeff_shamley</span>
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Don't ship your framework...</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Write plain HTML, CSS and JS</Text>
          <Text>Single file modules</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Compile your code</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Scoped CSS!</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Removal of unused CSS.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Server Side Rendering With Sapper</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">
            Svelte
          </Heading>
          <Text>Questions?</Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Svelte
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            The magical disappearing UI framework.
          </Text>
          <Text margin="140px 0 0" size={1}>
            <span style={{ float: 'left' }}>Jeff Shamley</span>
            <span style={{ float: 'right' }}>@jeff_shamley</span>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
