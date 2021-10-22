import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-around;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 18px;
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

export const Field = styled.View`
  flex-direction: row;
  justify-content:space-around;
  padding: 18px;
  margin-top: -20px;
`;