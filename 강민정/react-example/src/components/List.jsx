import React from 'react';
const List = ({list, btnDel, onCurrentDelete}) => {
  return (
    <>
      {list && list.map((list, index) => (
        <span className="interestEl" key={list + index}>
          <span className="insertText">{list}</span>
          <button
            type="button"
            className="buttonDelete"
            data-target={index}
            onClick={onCurrentDelete}
          >
            {btnDel}
          </button>
        </span>
      ))}
    </>
  );
}

export default List;