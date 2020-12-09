import React, { useState, useEffect, useRef } from 'react';
import { Container, Input } from './searchStyle';
import { INTEREST_OBJ } from '../../constants/interestConst';
import BtnComponent from './btnUnit/BtnComponent';

const InterestContainer = () => {
  const division = INTEREST_OBJ.DIVISION;
  const interestInput = useRef();
  const [arr, setArr] = useState([]);
  
  useEffect(() => {
    const LocalStorage = localStorage.getItem('interestarr') ? localStorage.getItem('interestarr') : '';
    const targetArr = JSON.parse(LocalStorage);
    LocalStorage && setArr(targetArr);
  }, []);

  useEffect(() => {
    const targetArr = JSON.stringify([...arr]);
    localStorage.setItem('interestarr', targetArr);
  }, [arr]);

  const onCreateItem = e => {
    const key = e.keyCode;
    let value = "";

    if (key !== 188) return;
    
    value = e.target.value.trim();
    validator(value + division);
  };

  const onDeleteClick = e => {
    if (e.target.name !== INTEREST_OBJ.DELETE) return;

    const id = e.target.dataset.id;
    setArr(arr.filter(item => item.id != id));
  }

  const onDeleteItem = e => {
    const key = e.keyCode;

    if (key !== 8) return;
    if (e.target.value) return;

    setArr(arr.filter(item => item.id != arr.length));
  };

  const validator = value => {
    const pointer = value.indexOf(division);

    if (pointer === 0) return reset();
    const text = value.slice(0, pointer);
  
    add(text);
  };

  const add = val => {
    setArr([
      ...arr,
      {
        id: arr.length + 1,
        item: val
      }
    ]);
    
    reset();
  };

  const reset = () => {
    interestInput.current.value = '';
  }

  return (
    <Container>
        <BtnComponent arr={arr} onDeleteClick={onDeleteClick}></BtnComponent>
        <Input 
            type="text"
            placeholder={INTEREST_OBJ.PLACEHOLDER}
            onKeyUp={onCreateItem}
            onKeyDown={onDeleteItem}
            ref={interestInput}
        />
    </Container>
  );
}

export default InterestContainer;