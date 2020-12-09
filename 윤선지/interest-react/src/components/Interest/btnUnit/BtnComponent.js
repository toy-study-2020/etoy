import React from 'react';
import { INTEREST_OBJ } from '../../../constants/interestConst';
import { Unit, BtnDelete, BtnArea, BtnText } from './btnStyle';

const BtnComponent = props => {
  const listArr = arr => {
    return arr.map((item, idx) => {
        return (
          <Unit key={idx} data-id={item.id}>
              <BtnText>{item.item}</BtnText>
              <BtnDelete type="button" name={INTEREST_OBJ.DELETE} data-id={item.id} onClick={props.onDeleteClick}>X</BtnDelete>
          </Unit>
        )
    })
  };

  return (
    <BtnArea>
        {listArr(props.arr)}
    </BtnArea>
  );
}

export default BtnComponent;