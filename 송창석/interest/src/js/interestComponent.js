import CLASS_NAME from "./constant.js";

const defaultComponent = () => {
    return `<div class="${CLASS_NAME.wrap}">
        <h2 class="${CLASS_NAME.title}">관심사</h2>
        <div class="${CLASS_NAME.interest}">
            <div class="${CLASS_NAME.list}"></div>
            <textarea id="toWrite" class="${CLASS_NAME.write}" tabindex="1" rows="1"></textarea>
        </div>
    </div>`
}

const interestComponent = (cur, idx) => {
    return `<div class="${CLASS_NAME.item}" data-idx="${idx}">${cur}<button type="button" class="${CLASS_NAME.erase}"></button></div>`
}

const eraseItems = (e, items) => {
    const targetObj = {
        item: e.target.parentNode,
        idx: e.target.parentNode.getAttribute("data-idx")
    }

    items.splice(targetObj.idx, 1);
    return items;
}

const interestItems = (e, items) => {
    let value = e.target.value;
    const code = e.keyCode;

    if(code === 188) {
        value = value.substr(0, value.length - 1);
        if(value != "") items.push(value);
    }
    if(code === 46) items.shift();
    if(code === 8) items.pop();
    if(code === 188 || code === 46 || code === 8) {
        e.target.value = "";
        return items;
    }
}


export { defaultComponent, interestComponent, interestItems, eraseItems };