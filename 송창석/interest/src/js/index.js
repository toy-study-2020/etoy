import { SET_ELEMENT } from "./constant.js";
import { connectTag, renderTag } from "./utils.js";
import { baseTemplate, itemComponent, addItems, eraseItems } from "./interestComponent.js";

const root = document.querySelector('#app');

const render = () => {
    const baseRender = baseTemplate();
    renderTag(root, baseRender);

    const element = SET_ELEMENT(root);
    setEvent(element);
}

const setEvent = (element) => {
    const { write, list, items } = element;
    write.addEventListener("keyup", (e) => {
        setItems(list, items , e, addItems);
    });
    list.addEventListener("click", (e) => {
        setItems(list, items , e, eraseItems);
    })
}

const setItems = (list, items, e, func) => {
    const itemArr = func(e, items);
    const setTag = connectTag(itemArr, itemComponent);
    if(setTag != undefined) renderTag(list, setTag);
}

render();

// import export 모듈패턴을 이용하여 TODO