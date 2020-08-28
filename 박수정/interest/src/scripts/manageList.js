import { listWrap, input } from "./setElement.js";
import { initializationInput } from "./initializationInput.js";

function removeList(evt) {
    if (!listWrap.lastElementChild) return;

    let selector = evt.target.tagName === 'INPUT'
     ? listWrap.lastElementChild : evt.target.parentElement;

    selector.remove();
    initializationInput(input);
}

function addList(val) {
    initializationInput(input);
    listWrap.insertAdjacentHTML('beforeend', `<li>${val}<button type="button" class="deleteBtn">✖</button></li>`)
}

export { removeList, addList };
