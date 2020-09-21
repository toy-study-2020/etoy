import React, { useState, useEffect } from 'react';
import { TEXT } from './constants/constants';
import Interest from './components/Interest';
import List from './components/List';
import './styles/style.scss';

const App = () => {
  const saveInterest = JSON.parse(localStorage.getItem('listInterest'));
  const initialInterest = saveInterest ? saveInterest : [];
  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_]+([,\s]|'')/;
  const [listInterest, setInterest] = useState(initialInterest);

  useEffect(() => {
    localStorage.setItem('listInterest', JSON.stringify(listInterest));
    if (listInterest.length === 0) {
      return console.log('load');
    }
  }, [listInterest]);

  const onInsert = e => {
    const target = e.target;
    matchRegex(target);
  };

  const onKeydown = e => {
    const eventKeycode = e.keyCode;
    const target = e.target;

    switch (eventKeycode) {
      case 13:
        if (target.value === '') return;
        setInterest([...listInterest, target.value]);
        onClear(target);
        break;
      case 8:
        if (target.value) return;
        onLastDelete();
        break;
      default:
        break;
    }
  };

  const matchRegex = target => {
    const result = regex.exec(target.value);
    const replaceValue = target.value.replace(/([,|\s])/, '');

    if (result) {
      setInterest([...listInterest, replaceValue]);
      onClear(target);
    }

    if (target.value === ' ' || target.value === ',') {
      onClear(target);
    }
  };

  const onClear = (target) => {
    const clearTarget = target ? target : document.querySelector('.interestInput');
    clearTarget.value = '';
  };

  const onLastDelete = () => {
    const listInterestLastIndex = listInterest.length - 1;
    const sliceListInterest = listInterest.slice(0, listInterestLastIndex);
    setInterest(sliceListInterest);
  };

  const onCurrentDelete = (e) => {
    const target = e.target;
    const index = Number(target.dataset.target);
    const spliceInterest = [...listInterest];
    spliceInterest.splice(index, 1);
    setInterest(spliceInterest);
  };

  return (
    <div className="interestWrapper">
      <strong>{TEXT.TITLE}</strong>
      <div className="interestList">
        <List
          list={listInterest}
          btnDel={TEXT.BUTTON.DEL}
          onCurrentDelete={onCurrentDelete}
        />
        <Interest
          placeholder={TEXT.PLACEHOLDER}
          onInsert={onInsert}
          onKeydown={onKeydown}
        />
      </div>
    </div>
  )
}

export default App;