import React, {useEffect, useState} from 'react';
import './InterestComponent.css';
import * as CONSTANT from '../constant/constant';
import {saveLocalStorage, checkLocalStorage} from '../state/InterestState';

const InterestComponent = () => {
    const {WRAP, TITLE, INTEREST, WRITE, ITEM, ERASE} = CONSTANT.CLASS_NAME;
    const {PLACE_HOLDER} = CONSTANT.DEFAULT_TEXT;
    const [items, setItems] = useState([]);

    useEffect(() => {
        const checkItems = checkLocalStorage();
        if(checkItems) setItems(JSON.parse(checkItems));
    },[]);

    useEffect(() => {
        saveLocalStorage(items);
    },[items]);
    
    const onKeyupAddItemHandler = (e) => {
        const code = e.keyCode;
        const value = e.target.value;
        
        if(code === 188) {
            setItems([...items, value.substr(0, value.length - 1)]);
            e.target.value = "";
        }
    }
    const onKeydownDeleteItemHandler = (e) => {
        const code = e.keyCode;
        const value = e.target.value;

        if(code === 46 || code === 8) {
            const newItems = items.splice(0,items.length -1);
            if(value === "") setItems(newItems);
        }
    }
    const onClickDeleteItemHandler = (e) => {
        const targetIdx = e.target.parentNode.getAttribute("data-idx");
        const newItems = [...items];
        newItems.splice(targetIdx,1);
        setItems(newItems);
    }

    return (
        <>
            <div className={WRAP}>
                <h2 className={TITLE}>관심사</h2>
                <div className={INTEREST}>
                    {items.map((it, index) => {
                        return (
                            <div key={index} className={ITEM} data-idx={index}>
                                {it}
                                <button
                                    type={"button"}
                                    className={ERASE}
                                    onClick={onClickDeleteItemHandler}
                                >
                                삭제
                                </button>
                            </div>
                        )
                    })}
                    <input
                        type={"text"}
                        className={WRITE}
                        placeholder={PLACE_HOLDER}
                        onKeyUp={onKeyupAddItemHandler}
                        onKeyDown={onKeydownDeleteItemHandler}
                    />
                </div>
            </div>
        </>
    );
};

export default InterestComponent;