import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 10px;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TimePicked = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.shape};
`;