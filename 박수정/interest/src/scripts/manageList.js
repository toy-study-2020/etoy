import { listWrap, input, initializationInput } from "./utils.js";

let interestList = [];

function removeList(evt) {
    if (!listWrap.lastElementChild) return;

    let selector = listWrap.lastElementChild;

    if (evt.target.tagName === 'INPUT') {
        interestList.pop();
    } else {
        selector = evt.target.parentElement;
        interestList = interestList.filter(item => {
            return item !== selector.querySelector('span').innerText;
        })
    }

    selector.remove();
    initializationInput(input);
}

function addList(val) {
    if (interestList.includes(val)) {
        alert('이미 등록되어 있는 관심사입니다.');
    } else {
        listWrap.insertAdjacentHTML('beforeend', `<li><span>${val}</span><button type="button" class="deleteBtn">✖</button></li>`)
        interestList.push(val);
    }

    initializationInput(input);
}

export { removeList, addList };
