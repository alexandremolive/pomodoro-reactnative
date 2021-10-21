import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 8px;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 8px auto;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 50px;
`;