import React from 'react';

import {
  Container,
  Title,
  TimePicked,

} from './styles'

interface Props {
  openModal: () => void;
  TimeBreak: number;
}

export function BreakButton({
  openModal,
  TimeBreak,
}: Props) {
  return (
    <Container
      onPress={openModal}
    >
      <Title>Pausa</Title>
      <TimePicked>{TimeBreak.toString().padStart(2, "0")}</TimePicked>
    </Container>
  )
}