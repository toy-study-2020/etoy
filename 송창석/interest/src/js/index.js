import { SET_ELEMENT } from "./constant.js";
import { connectTag, renderTag, resetTag } from "./utils.js";
import { baseTemplate, itemComponent, addItems, eraseItems } from "./interestComponent.js";

const root = document.querySelector('#app');

const render = () => {
    const baseRender = baseTemplate();
    renderTag(root, baseRender, "beforeend");

    const element = SET_ELEMENT(root);
    setEvent(element);
}

const setEvent = (element) => {
    const { write, interest, items } = element;
    write.addEventListener("keyup", (e) => {
        const code = e.keyCode;
        if(code === 188) {
            const itemsArr = addItems(e, items);
            const setTag = itemComponent(itemsArr[itemsArr.length - 1], itemsArr.length -1)
            renderTag(write, setTag, "beforebegin");
        }
        if(code === 46 || code === 8) {
            resetTag(interest);
            const itemsArr = eraseItems(items.length -1, items);
            const setTag = connectTag(itemsArr, itemComponent);
            renderTag(write, setTag, "beforebegin");
        }
    });
    interest.addEventListener("click", (e) => {
        const target = e.target;

        if(target.classList.contains("item_erase")) {
            const targetItem = target.parentNode;
            const targetIndex = targetItem.getAttribute("data-idx");
            resetTag(interest);
            const itemsArr = eraseItems(targetIndex, items);
            const setTag = connectTag(itemsArr, itemComponent);
            renderTag(write, setTag, "beforebegin");
            write.focus();
        }
    })
}

render();

// import export 모듈패턴을 이용하여 TODO