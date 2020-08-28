import { input } from "./setElement.js";
import { initializationInput } from "./initializationInput.js";
import { removeList, addList } from "./manageList.js";

function keycheck(evt) {
    return evt.which ? evt.which : event.keyCode;
}

input.addEventListener('keyup', function(e) {
    const value = this.value.replace(/,/gi, "");

    switch (keycheck(e)) {
        case 188:
            if (!value) return initializationInput(input);

            addList(value);
            break;

        case 46:
            removeList(e);
            break;

        default:
            break;
    }
})

document.addEventListener('click', e => {
    if (e.target.classList.contains('deleteBtn')) removeList(e);
});
