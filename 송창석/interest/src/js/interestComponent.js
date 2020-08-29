import CLASS_NAME from "./constant.js";

const defaultComponent = () => {
    return `<div class="${CLASS_NAME.wrap}">
        <h2 class="${CLASS_NAME.title}">관심사</h2>
        <div class="${CLASS_NAME.interest}">
            <div class="${CLASS_NAME.writeWrap}">
                <span class="${CLASS_NAME.writeCalc}"></span>
                <textarea id="toWrite" class="${CLASS_NAME.writearea}" tabindex="1" rows="1"></textarea>
            </div>
        </div>
    </div>`
}

const interestComponent = (value) => {
    return `<div class="${CLASS_NAME.item}">${value}<button type="button" class="${CLASS_NAME.erase}"></button></div>`
}

const interestItems = (e, element) => {
    const code = e.keyCode;
    const value = e.target.value;
    const itemArr = element.interest.querySelectorAll(".item_interest");
    let eraseTarget = null;
    
    if(code === 188) e.target.value = "";
    if(code === 46) eraseTarget = itemArr[0];
    if(code === 8) eraseTarget = itemArr[itemArr.length - 1];
    if (code === 188 || code === 46 || code === 8) {
        return {
            value,
            eraseTarget,
            code
        }
    }
}

const calcWirteSize = (e, element) => {
    element.writecalc.innerText = e.target.value;
    element.writewrap.style.width = `${element.writecalc.offsetWidth + 30}px`;
}

export { defaultComponent, interestComponent, interestItems, calcWirteSize };