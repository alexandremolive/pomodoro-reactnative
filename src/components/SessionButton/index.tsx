import React from 'react';

import {
  Container,
  Title,
  TimePicked,

} from './styles'

interface Props {
  openModal: () => void;
  session: number;
}

export function SessionButton({
  openModal,
  session,
}: Props) {
  return (
    <Container
      onPress={openModal}
    >
      <Title>Sessão</Title>
      <TimePicked>{session.toString().padStart(2, "0")}</TimePicked>
    </Container>
  )
}