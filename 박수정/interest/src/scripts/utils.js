function rederHTML() {
    const app = document.querySelector('#app');

    app.innerHTML = '<h1>관심사</h1>' +
        '<div class="input__container">' +
        '<ul></ul>' +
        '<input type="text">' +
        '</div>';
}

function getSlector(el, elContainer) {
    const container = elContainer ? elContainer : document;
    return container.querySelector(el);
}

function initializationInput(el) {
    el.value = '';
    el.focus();
}

rederHTML();
const container = getSlector('.input__container');
const listWrap = getSlector('ul', container);
const input = getSlector('input', container);

export { container, listWrap, input, initializationInput };