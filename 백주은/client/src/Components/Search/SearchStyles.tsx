import styled from '../../styles/typed-components';
import { Tab, TabList, TabPanel } from 'react-tabs';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  margin: 50px auto;
  border: 3px solid ${props => props.theme.blueColor};
`;
export const SaerchForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Form = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  border: none;
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
export const SearchList = styled.div`
  overflow-y: auto;
  position: absolute;
  left: -3;
  top: 43px;
  width: calc(100% + 6px);
  height: 200px;
  padding: 15px 10px;
  border: 1px solid #eee;
`;
export const SearchResult = styled.div``;
export const SearchItem = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

export const TabNav = styled(TabList)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

export const TabNavItem = styled(Tab)`
  position: relative;
  width: 50%;
  padding: 5px 0;
  text-align: center;
  cursor: pointer;
  &.react-tabs__tab--selected::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform: translate(50%, 100%);
    background: ${props => props.theme.blueColor};
  }
`;
export const TabContent = styled(TabPanel)`
  display: flex;
  justify-content: space-between;
  > div {
    width: 50%;
    > div {
      display: flex;
      padding: 5px;
      span {
        width: 18px;
        height: 18px;
        margin-right: 5px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 20px;
        border-radius: 9px;
        background: ${props => props.theme.blueColor};
      }
    }
  }
`;
