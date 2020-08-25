import { connectHtml, renderHtml } from "./utils.js";
import { defaultComponent, interestComponent, interestItems, eraseItems } from "./interestComponent.js";

const root = document.querySelector('#app');

const render = () => {
    const defaultRender = defaultComponent();
    renderHtml(root, defaultRender);

    const element = {
        interest: document.querySelector(".interest"),
        write: document.querySelector(".write_interest"),
        list: document.querySelector(".list_interest"),
        items: [],
        erase: null
    };

    element.write.addEventListener("keyup", (event) => {
        renderItem(event, element, interestItems)
    });

    element.list.addEventListener("click", (event) => {
        if(event.target.classList.contains("item_erase")) renderItem(event, element, eraseItems);
    })
}

const renderItem = (e, element, sortItems) => {
    const listArr = sortItems(e, element.items);
    const listRender = connectHtml(listArr, interestComponent);
    if(listRender != undefined) renderHtml(element.list, listRender);
}



render();

// import export 모듈패턴을 이용하여 TODO