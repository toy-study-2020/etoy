import React from 'react';
const Interest = ({placeholder, onInsert, onKeydown}) => {
  return (
    <>
      <input
        type="text"
        name="interestInput"
        className="interestInput"
        placeholder={placeholder}
        onChange={onInsert}
        onKeyDown={onKeydown}
      />
    </>
  );
}

export default Interest;