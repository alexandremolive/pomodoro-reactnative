import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 10px;
  height: 125px;
  width: 125px;
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