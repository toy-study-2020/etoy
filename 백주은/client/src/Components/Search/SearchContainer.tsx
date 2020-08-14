import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import SearchPresenter from './SearchPresenter';

type Data = { keyword: string[]; matchKeyword: string[]; bestKeyword: string[] };

const getFetch = async (url: string | undefined) => {
  const response = await axios.get(url!);
  return response.data;
};

const SearchContainer = () => {
  const searchEl = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [focus, setFocus] = useState(false);
  const [data, setData] = useState<Data>({
    keyword: [],
    matchKeyword: [],
    bestKeyword: [],
  });

  useEffect(() => {
    getKeyword();
    window.addEventListener('click', ({ target }) => {
      if (!searchEl.current?.contains(target as Element)) {
        setFocus(false);
        setInputFocus(false);
      }
    });
  }, [inputFocus]);

  const getKeyword = async () => {
    const responseKeyword = await getFetch(process.env.REACT_APP_KEYWORD_API);
    const responseBestKeyword = await getFetch(process.env.REACT_APP_BEST_KEYWORD_API);
    return setData({
      ...data,
      keyword: responseKeyword.keyword,
      bestKeyword: responseBestKeyword.bestKeyword,
    });
  };

  const onFocus = () => {
    setFocus(true);
    setInputFocus(true);
  };
  const onBlur = () => setFocus(false);

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(input);
    console.log(data.matchKeyword);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value;
    setInput(targetValue);
    setFocus(false);
    const { keyword } = data;
    const matchList: string[] = [];
    keyword.forEach((item: any) => {
      if (item.slice(0, targetValue.length) === targetValue) {
        matchList.push(item);
      }
    });
    setData({
      ...data,
      matchKeyword: matchList,
    });
    if (!targetValue) {
      setData({
        ...data,
        matchKeyword: [],
      });
      setFocus(true);
    }
  };

  return (
    <SearchPresenter
      onSubmit={onSubmit}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      focus={focus}
      inputFocus={inputFocus}
      keyword={data}
      childRef={searchEl}
    />
  );
};

export default SearchContainer;
