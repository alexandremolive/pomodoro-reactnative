import React from 'react';

import {
  Container,
  Title,
  TimePicked,

} from './styles'

export function TimePickerButton() {
  return (
    <Container>
      <Title>Session</Title>
      <TimePicked>25</TimePicked>
    </Container>
  )
}