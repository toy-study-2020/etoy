import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, SaerchForm, SearchList, Form, Input, Button } from './SearchStyles';

interface IProps {
  onSubmit: any;
  onChange: any;
  onFocus: any;
  onBlur: any;
  focus: boolean;
  childRef: React.RefObject<HTMLDivElement>;
  keyword: { keyword?: string[]; matchKeyword?: string[] };
}

const SearchResultArea = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>인기검색어</Tab>
        <Tab>최근검색어</Tab>
      </TabList>
      <TabPanel>인기검색어 출력</TabPanel>
      <TabPanel>최근검색어 출력</TabPanel>
    </Tabs>
  );
};

const SearchPresenter: React.SFC<IProps> = ({ onSubmit, onChange, onFocus, focus, keyword, childRef }) => {
  return (
    <Container ref={childRef}>
      <Form onSubmit={onSubmit}>
        <SaerchForm>
          <Input onChange={onChange} onClick={onFocus} />
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg>
          </Button>
        </SaerchForm>
      </Form>
      <SearchList>
        {focus && <SearchResultArea />}
        {keyword.matchKeyword &&
          keyword.matchKeyword.map((item: string, index: number) => <div key={index}>{item}</div>)}
      </SearchList>
    </Container>
  );
};

export default SearchPresenter;
