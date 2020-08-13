import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchPresenter from './SearchPresenter';

const getFetch = async (url: string | undefined) => {
  const response = await axios.get(url!);
  return response.data;
};

const SearchContainer = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState({
    keyword: [],
    matchKeyword: [],
  });

  useEffect(() => {
    getKeyword();
  }, []);

  const getKeyword = async () => {
    const data = await getFetch(process.env.REACT_APP_KEYWORD_API);
    return setData({
      ...data,
      keyword: data.keyword,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(input);
    console.log(data.matchKeyword);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value;
    setInput(targetValue);
    const { keyword } = data;
    const matchList: any = [];
    keyword.forEach((item: any) => {
      if (item.slice(0, targetValue.length) === targetValue) {
        matchList.push(item);
      }
    });
    setData({
      ...data,
      matchKeyword: matchList,
    });
    if (!targetValue)
      setData({
        ...data,
        matchKeyword: [],
      });
  };

  return <SearchPresenter onSubmit={onSubmit} onChange={onChange} keyword={data} />;
};

export default SearchContainer;
