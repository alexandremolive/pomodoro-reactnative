import React from 'react';

import {
  Container,
  Time,
} from './styles';

interface Props {
  item: string;
  closeModal: (item: string) => void;
}

export function TimerCard({
  item,
  closeModal,
}: Props) {
  return (
    <Container
      onPress={()=> closeModal(item)}
    >
      <Time>{item.padStart(2, "0")}</Time>
    </Container>
  )
}