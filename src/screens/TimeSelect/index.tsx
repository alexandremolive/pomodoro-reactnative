import React from 'react';


import {
  Container,
  Header,
  Title,
  TimerRoulette,

} from './styles'

import { TimerCard } from '../../components/TimerCard'
import data from '../../utils/data'

export function TimeSelect() {

  return (
    <Container>
      <Header>
        <Title>Selecione o tempo</Title>
      </Header>
      <TimerRoulette
        data={data}
        keyExtractor={item => item}
        renderItem={({ item }) => <TimerCard
          item={item}
        />}
      />

    </Container>
  )
}