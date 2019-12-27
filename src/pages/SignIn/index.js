import React from 'react';

import Title from '~/components/Title';
import TextInput from '~/components/TextInput';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Title />
      <TextInput />
    </Container>
  );
}
