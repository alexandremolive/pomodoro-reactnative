import React from 'react';

import {
  Container,
  Header,
  Title,
  Field,
  Footer,
} from './styles'

import { Timer } from '../../components/Timer';
import { TimePickerButton } from '../../components/TimePickerButton'
import { ActionButton } from '../../components/ActionButton'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Title>Pomodoro</Title>
      </Header>
      <Timer />
      <Field>
        <TimePickerButton />
        <TimePickerButton />
      </Field>
      <Footer>
        <ActionButton />
        <ActionButton />
        <ActionButton />
      </Footer>
    </Container >
  )
}