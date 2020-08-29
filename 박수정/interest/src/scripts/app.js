import { input, initializationInput } from "./utils.js";
import { removeList, addList } from "./manageList.js";

input.addEventListener('keyup', function(e) {
    const value = this.value.replace(/,/gi, "");
    const keyCheck = e.which ? e.which : event.keyCode;

    switch (keyCheck) {
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
