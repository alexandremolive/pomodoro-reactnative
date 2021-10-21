import React from 'react';

import {
  Container,
  Time,
  Status,
} from './styles'

export function Timer() {
  return (
    <Container>
      <Time>25</Time>
      <Status>Work time!</Status>
    </Container>
  )
}