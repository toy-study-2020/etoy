import styled from '../../styles/typed-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;
export const SaerchForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  border: 3px solid ${props => props.theme.blueColor};
`;
export const Form = styled.form``;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  outline: none;
`;
export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background: ${props => props.theme.blueColor};
  cursor: pointer;
  outline: none;
`;
export const SearchList = styled.div``;
