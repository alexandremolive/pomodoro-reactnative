import React from 'react';

import {
  Container,
  Icon,
} from './styles';

interface Props {
  name: string;
}

export function ActionButton({ name }: Props) {
  return (
    <Container>
      <Icon name={name} />
    </Container>
  )
}