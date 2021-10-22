import React from 'react';

import {
  Container,
  Icon,
} from './styles';

interface Props {
  name: string;
  onPress: () => void;
  isPLaying: boolean;

}

export function ActionButton({
  name,
  onPress,
  isPLaying,
}: Props) {
  return (
    <Container
      onPress={onPress}
      disabled={name === 'play' ? isPLaying : false}
    >
      <Icon name={name} />
    </Container>
  )
}