import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 10px;
`;

export const Icon = styled(Feather)`
color: ${({ theme }) => theme.colors.secondary};
font-size: 24px;
`;