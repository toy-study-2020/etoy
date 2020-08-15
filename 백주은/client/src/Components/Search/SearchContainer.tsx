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
  const [keyIndex, setKeyIndex] = useState<number>(0);
  const [input, setInput] = useState('');
  const [lastly, setLastly] = useState<string[]>([]);
  const [inputFocus, setInputFocus] = useState(false);
  const [focus, setFocus] = useState(false);
  const [data, setData] = useState<Data>({
    keyword: [],
    matchKeyword: [],
    bestKeyword: [],
  });

  useEffect(() => {
    getKeyword();
    const getLocalStorage: any = localStorage.getItem('lastly') ? localStorage.getItem('lastly') : '';
    getLocalStorage && setLastly([...JSON.parse(getLocalStorage)]);
    window.addEventListener('click', ({ target }) => {
      if (!searchEl.current?.contains(target as Element)) {
        setFocus(false);
        setInputFocus(false);
      }
    }); // eslint-disable-next-line
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
    const getLocalStorage: any = localStorage.getItem('lastly') ? localStorage.getItem('lastly') : '';
    localStorage.setItem('lastly', JSON.stringify([...JSON.parse(getLocalStorage), input]));
    setLastly([...lastly, input]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 40) {
      setInput(data.matchKeyword[keyIndex]);
      keyIndex === data.matchKeyword.length - 1 ? setKeyIndex(0) : setKeyIndex(keyIndex + 1);
    }
    if (e.keyCode === 38) {
      setInput(data.matchKeyword[keyIndex]);
      keyIndex === 0 ? setKeyIndex(data.matchKeyword.length - 1) : setKeyIndex(keyIndex - 1);
    }
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value;
    const { keyword } = data;
    const matchList: string[] = [];
    setInput(targetValue);
    setFocus(false);
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
      value={input}
      focus={focus}
      inputFocus={inputFocus}
      keyword={data}
      childRef={searchEl}
      onKeyDown={onKeyDown}
      keyIndex={keyIndex}
      lastly={lastly}
    />
  );
};

export default SearchContainer;
