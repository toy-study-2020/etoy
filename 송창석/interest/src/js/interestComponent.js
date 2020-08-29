import { CLASS_NAME, PLACE_HOLDER } from "./constant.js";

const baseTemplate = () => {
    const { WRAP, TITLE, INTEREST, WRITE } = CLASS_NAME;
    
    return `<div class="${WRAP}">
        <h2 class="${TITLE}">관심사</h2>
        <div class="${INTEREST}">
            <input type="text" class="${WRITE}" placeholder="${PLACE_HOLDER}"/>
        </div>
    </div>`
}

const itemComponent = (value, index) => {
    const { ITEM, ERASE } = CLASS_NAME;

    return `<div class="${ITEM}" data-idx="${index}">${value}<button type="button" class="${ERASE}"></button></div>`
}

const addItems = (e, items) => {
    const value = e.target.value;
    e.target.value = "";
    
    if(value != ",") {
        items.push(value.substr(0, value.length - 1));
        return items;
    }
}

const eraseItems = (idx, items) => {
    items.splice(idx, 1);
    return items;
}

export { baseTemplate, itemComponent, addItems, eraseItems }