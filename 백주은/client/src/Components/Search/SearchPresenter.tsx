import React from 'react';
import { Tabs } from 'react-tabs';
import {
  Container,
  SaerchForm,
  SearchList,
  SearchResult,
  SearchItem,
  Form,
  Input,
  Button,
  TabNav,
  TabNavItem,
  TabContent,
} from './SearchStyles';

const INPUT_PLACEHOLDER = '영어로 검색하세요.';

interface IProps {
  onSubmit: any;
  onChange: any;
  onFocus: any;
  onBlur: any;
  onKeyDown?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
  value: string;
  focus: boolean;
  inputFocus: boolean;
  childRef: React.RefObject<HTMLDivElement>;
  keyword: { keyword?: string[]; matchKeyword?: string[]; bestKeyword?: string[] };
  keyIndex: number;
  lastly: string[];
}

interface IPropsResult {
  bestKeyword: any;
  lastly: string[];
}

const SearchResultArea: React.SFC<IPropsResult> = ({ bestKeyword, lastly }) => {
  const bestfive = bestKeyword.slice(0, 5);
  const rest = bestKeyword.slice(5, 10);
  return (
    <Tabs>
      <TabNav>
        <TabNavItem>인기검색어</TabNavItem>
        <TabNavItem>최근검색어</TabNavItem>
      </TabNav>
      <TabContent>
        <div>
          {bestfive.map((item: string, index: number) => (
            <div key={index}>
              <span>{index + 1}</span> {item}
            </div>
          ))}
        </div>
        <div>
          {rest.map((item: string, index: number) => (
            <div key={index}>
              <span>{index + 6}</span>
              {item}
            </div>
          ))}
        </div>
      </TabContent>
      <TabContent>
        {!lastly.length && <span>최근 검색어가 없습니다.</span>}
        {lastly.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </TabContent>
    </Tabs>
  );
};

const SearchPresenter: React.SFC<IProps> = ({
  onSubmit,
  onChange,
  onFocus,
  onKeyDown,
  focus,
  inputFocus,
  keyword,
  value,
  childRef,
  keyIndex,
  lastly,
}) => {
  return (
    <Container ref={childRef}>
      <Form onSubmit={onSubmit}>
        <SaerchForm>
          <Input
            onChange={onChange}
            onClick={onFocus}
            onKeyDown={onKeyDown}
            placeholder={INPUT_PLACEHOLDER}
            value={value}
          />
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg>
          </Button>
        </SaerchForm>
      </Form>
      {inputFocus && (
        <SearchList>
          {focus && <SearchResultArea bestKeyword={keyword.bestKeyword} lastly={lastly} />}
          {keyword.matchKeyword && (
            <SearchResult>
              {keyword.matchKeyword.map((item: string, index: number) => (
                <SearchItem key={index} className={keyIndex - 1 === index ? 'keyword-on' : 'keyword-off'}>
                  {item}
                </SearchItem>
              ))}
            </SearchResult>
          )}
        </SearchList>
      )}
    </Container>
  );
};

export default SearchPresenter;
