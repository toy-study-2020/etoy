// Search TODO

class formSearch {
    constructor (selector, maxLength) {
        this.selector = selector;
        this.maxLength = maxLength;
    }
    setInit() {
        const searchEl = {
            wrapper: document.querySelector(this.selector),
            form: document.querySelector("#search > form"),
            input: document.querySelector("#search-input"),
            close: document.querySelector(".close button"),
            list: document.querySelector(".related_list"),
            maxLength: this.maxLength,
            items: null,
            focusIndex: null
        }
        this.setEvent(searchEl);
    }
    setEvent(searchEl) {
        searchEl.form.addEventListener('submit', (event) => {
            event.preventDefault();
            if(searchEl.input.value === '') alert(`검색어를 입력해주세요.`);
            if(searchEl.input.value) alert(`${searchEl.input.value} 검색`);
        });
        
        searchEl.input.addEventListener('keyup', (event) => {
            if(event.keyCode === 40 || event.keyCode === 38) {
                if (event.keyCode === 40) searchEl.focusIndex = searchEl.focusIndex >= searchEl.items.length - 1 ? 0 : searchEl.focusIndex + 1;
                if (event.keyCode === 38) searchEl.focusIndex = searchEl.focusIndex <= 0 ? searchEl.items.length - 1 : searchEl.focusIndex - 1;
                focusList(searchEl.focusIndex, searchEl.items, searchEl.input);
            } else if(event.keyCode != 13) {
                const components = keyFilter(event.target.value, searchEl.maxLength);
                renderItems(searchEl, components);
                searchEl.focusIndex = searchEl.items.length;
            }

            if(event.target.value) showRelateList(searchEl.wrapper);
            if(event.target.value === '') hideRelateList(searchEl.wrapper);
        });

        searchEl.close.addEventListener('click', () => hideRelateList(searchEl.wrapper));
    }
}

const keyFilter = (value, maxLength) => {
    const filtered = keyword.filter(word => {
        if(word.substring(0, value.length).indexOf(value) > -1) return word
    }).slice(0, maxLength);
    
    let renderGroup = [];
    for(let i = 0; i < filtered.length; i++) renderGroup += `<li data-idx="${i}"><a href="#n">${filtered[i]}</a></li>`;
    return renderGroup;
}

const renderItems = (el, components) => {
    el.list.innerHTML = components;
    el.items = el.list.querySelectorAll("a");
}

const focusList = (idx, items, input) => {
    items.forEach(item => item.classList.remove('focused'));
    items[idx].classList.add('focused');
    input.value = items[idx].innerText;
}

const showRelateList = (wrapper) => wrapper.classList.add("has_value");
const hideRelateList = (wrapper) => wrapper.classList.remove("has_value");



const search = new formSearch('#search', 10);
search.setInit();