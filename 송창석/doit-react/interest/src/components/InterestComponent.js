import React, {useState} from 'react';
import './InterestComponent.css';
import {CLASS_NAME, DEFAULT_TEXT} from '../constant/constant';
import {getStorage, setStorage} from '../state/InterestState';

const InterestComponent = () => {
    const {WRAP, TITLE, INTEREST, WRITE, ITEM, ERASE} = CLASS_NAME;
    const {PLACE_HOLDER} = DEFAULT_TEXT;
    const [items, setItems] = useState(getStorage);
    let itemsArray = items;
    
    const onKeyupAddItemHandler = (e) => {
        const code = e.keyCode;
        const value = e.target.value;
        
        if(code === 188) {
            itemsArray.push(value.substr(0, value.length - 1));
            setItemsArray(itemsArray);
            e.target.value = "";
        }
    }
    const onKeydownDeleteItemHandler = (e) => {
        const code = e.keyCode;
        const value = e.target.value;

        if(code === 46 || code === 8) {
            if(value === "") {
                itemsArray.splice(itemsArray.length - 1, 1);
                setItemsArray(itemsArray);
            }
        }
    }
    const onClickDeleteItemHandler = (e) => {
        const targetIdx = e.target.parentNode.getAttribute("data-idx");
        itemsArray.splice(targetIdx, 1);
        setItemsArray(itemsArray);
    }
    const setItemsArray = (itemsArray) => {
        setStorage(itemsArray);
        setItems(getStorage);
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
                                        onClick={(e) => {onClickDeleteItemHandler(e)}}
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
                        onKeyUp={(e) => {onKeyupAddItemHandler(e)}}
                        onKeyDown={(e) => {onKeydownDeleteItemHandler(e)}}
                    />
                </div>
            </div>
        </>
    );
};

export default InterestComponent;