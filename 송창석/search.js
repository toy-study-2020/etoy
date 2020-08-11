// Search TODO

class formSeach {
    constructor (selector, count) {
        this.selector = selector;
        this.count = count;
    }
    setInit() {
        const searchEl = {
            wrapper: document.querySelector(this.selector),
            form: document.querySelector("#search > form"),
            input: document.querySelector("#search-input"),
            close: document.querySelector(".close button"),
            list: document.querySelector(".related_list"),
            item: null
        }
        
        this.setEvent(searchEl);
    }
    setEvent(searchEl) {
        searchEl.form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(searchEl.input.value);
        });
        
        let actIdx = null;
        searchEl.input.addEventListener('keyup', (event) => {
            const value = event.target.value;
            const components = keyFilter(value);
            renderItem(searchEl, components);

            if(value) showRelateList(searchEl);
            if(value === '') hideRelateList(searchEl);
            if(event.keyCode === 40) {
                searchEl.item[0].focus();
                searchEl.input.value = searchEl.item[0].innerText;
            };

            actIdx = 0;
        });
        
        searchEl.list.addEventListener('keyup', (event) => {
            if(event.keyCode === 40) actIdx = actIdx + 1;
            if(event.keyCode === 38) actIdx = actIdx - 1;
            if(event.keyCode === 40 || event.keyCode === 38) {
                focusList(actIdx, searchEl);
            }
        })

        searchEl.close.addEventListener('click', () => {
            hideRelateList(searchEl)
        })
    }
}

const keyFilter = (value) => {
    let filtered = keyword.filter(word => {
        if(word.substring(0, value.length).indexOf(value) > -1) return word
    })
    filtered = filtered.slice(0, filtered.length);
    if(filtered.length > 10) filtered = filtered.slice(0, 10);
    
    let renderGroup = [];
    for(let i = 0; i < filtered.length; i++) {
        renderGroup += `<li data-idx="${i}"><button>${filtered[i]}</button></li>`
    }
    
    return renderGroup;
}

const renderItem = (el, components) => {
    el.list.innerHTML = components;
    el.item = el.list.querySelectorAll("button");
}

const focusList = (idx, el) => {
    if(idx < 0 || idx >= el.item.length) {
        el.input.focus();
        return hideRelateList(el);
    };
    if(0 < idx < el.item.length) {
        el.input.value = el.item[idx].innerText
        return el.item[idx].focus();
    };
}

const showRelateList = (el) => {
    el.wrapper.classList.add("has_value");
}
const hideRelateList = (el) => {
    el.wrapper.classList.remove("has_value");
}



const search = new formSeach('#search');
search.setInit();