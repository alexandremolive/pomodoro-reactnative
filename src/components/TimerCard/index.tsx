import React from 'react';

import {
  Container,
  Time,
} from './styles';

interface Props {
  item: number;
}

export function TimerCard({ item }: Props) {
  return (
    <Container >
      <Time>{item.toString().padStart(2, "0")}</Time>
    </Container>
  )
}