const container = document.querySelector('.input__container');
const listWrap = container.querySelector('ul');
const input = container.querySelector('input');

function keycheck(evt) {
    return evt.which ? evt.which : event.keyCode;
}

function initializationInput() {
    input.value = '';
    input.focus();
}

function removeList(evt) {
    if (!listWrap.lastElementChild) return;

    let selector = evt.target.tagName === 'INPUT'
     ? listWrap.lastElementChild : evt.target.parentElement;

    selector.remove();
}

function addList(val) {
    initializationInput();
    listWrap.insertAdjacentHTML('beforeend', `<li>${val}<button type="button" class="deleteBtn">✖</button></li>`)
}

input.addEventListener('keyup', function(e) {
    const value = this.value.replace(/,/gi, "");

    switch (keycheck(e)) {
        case 188:
            if (!value) return initializationInput();

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
