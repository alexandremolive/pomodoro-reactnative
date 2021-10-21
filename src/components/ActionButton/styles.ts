import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled(BorderlessButton)`
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