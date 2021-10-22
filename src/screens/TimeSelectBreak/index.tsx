import React from 'react';
import { FlatList } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'


import {
  Container,
  Header,
  Title,
} from './styles'

import { TimerCard } from '../../components/TimerCard'
import { data } from '../../utils/data'

interface Props {
  closeModal: (item: string) => void;
}

export function TimeSelectBreak({ closeModal }: Props) {

  return (
    <Container>
      <Header>
        <Title>Selecione o tempo da Pausa</Title>
      </Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <TimerCard
          closeModal={closeModal}
          item={item}
        />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }} />
    </Container>
  )
}