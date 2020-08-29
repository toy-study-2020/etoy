import { CLASS_NAME, PLACE_HOLDER } from "./constant.js";

const baseTemplate = () => {
    const { WRAP, TITLE, INTEREST, LIST, WRITE } = CLASS_NAME;
    
    return `<div class="${WRAP}">
        <h2 class="${TITLE}">관심사</h2>
        <div class="${INTEREST}">
            <uL class="${LIST}"></uL>
            <input type="text" class="${WRITE}" placeholder="${PLACE_HOLDER}"/>
        </div>
    </div>`
}

const itemComponent = (value, index) => {
    const { ITEM, ERASE } = CLASS_NAME;

    return `<li class="${ITEM}" data-idx="${index}">${value}<button type="button" class="${ERASE}"></button></li>`
}

const addItems = (e, items) => {
    const code = e.keyCode;
    const value = e.target.value;
    
    if(code === 188) {
        if(value != ",") items.push(value.substr(0, value.length - 1));
        e.target.value = "";
    } 
    if(code === 46 || code === 8) {
        if(value === "") items.pop();
    }
    if(code === 188 || code === 46 || code === 8) return items;
}

const eraseItems = (e, items) => {
    const target = e.target;
    
    if(target.classList.contains("item_erase")) {
        const targetItem = target.parentNode;
        const targetIndex = targetItem.getAttribute("data-idx");
        items.splice(targetIndex, 1);

        return items;
    }
}

export { baseTemplate, itemComponent, addItems, eraseItems };