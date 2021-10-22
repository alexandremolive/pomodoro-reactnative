import React from 'react';

import {
  Container,
  Header,
  Time,
  Status,
  Field,
} from './styles'

import { ActionButton } from '../../components/ActionButton'

interface Props {
  sessionDisplay: number
}

export function Timer({ sessionDisplay }: Props) {
  return (
    <Container>
      <Header>
        <Time>{sessionDisplay.toString().padStart(2, "0")}</Time>
        <Status>Work time!</Status>
      </Header>
      <Field>
        <ActionButton
          name={'play'}
        />
        <ActionButton
          name={'pause'}
        />
        <ActionButton
          name={'refresh-ccw'}
        />
      </Field>
    </Container>

  )
}