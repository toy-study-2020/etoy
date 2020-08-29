import { eraseHtml, renderHtml } from "./utils.js";
import { defaultComponent, interestComponent, interestItems, calcWirteSize } from "./interestComponent.js";

const root = document.querySelector('#app');

const render = () => {
    const defaultRender = defaultComponent();
    renderHtml(root, defaultRender, "beforeend");

    const element = {
        interest: document.querySelector(".interest"),
        writewrap: document.querySelector(".write_wrap"),
        writecalc: document.querySelector(".write_calc"),
        writearea: document.querySelector(".write_interest"),
    };

    element.writearea.addEventListener("keydown", (event) => {
        calcWirteSize(event, element);
    });

    element.writearea.addEventListener("keyup", (event) => {
        calcWirteSize(event, element);
        
        const writeObj = interestItems(event, element);
        if(writeObj != undefined) {
            const isValue = writeObj.value != "" ? true : false;
            const isCode = writeObj.code != 188 ? true: false;
            const interestRender = interestComponent(writeObj.value.substr(0, writeObj.value.length - 1));
            
            if(isValue && !isCode) renderHtml(element.writewrap, interestRender, "beforebegin");
            if(!isValue && isCode) eraseHtml(writeObj.eraseTarget, element.interest);
        }
    });

    element.interest.addEventListener("click", (event) => {
        if(event.target.classList.contains("item_erase")) {
            const eraseTarget = event.target.parentNode;
            element.writearea.focus();
            eraseHtml(eraseTarget, element.interest);
        }
    })
}



render();

// import export 모듈패턴을 이용하여 TODO