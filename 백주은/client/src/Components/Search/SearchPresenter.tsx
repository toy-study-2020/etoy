import React from 'react';
import styled from '../../styles/typed-components';

interface IProps {
  onSubmit: any;
  onChange: any;
  keyword: { keyword?: string[]; matchKeyword?: string[] };
}

const Container = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

const SearchPresenter: React.SFC<IProps> = ({ onSubmit, onChange, keyword }) => {
  return (
    <Container onSubmit={onSubmit}>
      <Input onChange={onChange} />
      <Button>검색</Button>
      {keyword.matchKeyword && keyword.matchKeyword.map((item: string, index: number) => <div key={index}>{item}</div>)}
    </Container>
  );
};

export default SearchPresenter;
