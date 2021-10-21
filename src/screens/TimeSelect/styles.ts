import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.shape};;
font-size: 36px;
`;

export const TimerRoulette = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
  paddingBottom: getBottomSpace()
}
})``;
