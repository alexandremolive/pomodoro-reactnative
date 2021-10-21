import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin: -150px auto 0;
  border-radius: 10px;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 140px;
`;

export const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 40px;
  margin-top: -20px;
`;