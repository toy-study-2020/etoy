// Search TODO

class formSearch {
    constructor (element, maxLength) {
        this.element = element;
        this.setEvent(this.element);
        this.maxLength = maxLength;
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
                this.focusList(searchEl.focusIndex, searchEl.items, searchEl.input);
            } else if(event.keyCode != 13) {
                const components = this.keyFilter(event.target.value, this.maxLength);
                this.renderItems(searchEl, components);
                searchEl.focusIndex = searchEl.items.length;
            }

            if(event.target.value) this.showRelateList(searchEl.wrapper);
            if(event.target.value === '') this.hideRelateList(searchEl.wrapper);
        });

        searchEl.close.addEventListener('click', () => this.hideRelateList(searchEl.wrapper));
    }
    keyFilter(value, maxLength) {
        const filtered = keyword.filter(word => {
            if(word.substring(0, value.length).indexOf(value) > -1) return word
        }).slice(0, maxLength);
        
        const render = filtered.reduce((acc, value, index) => {
            return acc += `<li data-idx=${index}><a href="#n">${value}</a></li>`
        },"")
        
        return render;
    }
    renderItems(el, components) {
        el.list.innerHTML = components;
        el.items = el.list.querySelectorAll("a");
    }
    focusList(idx, items, input) {
        items.forEach(item => item.classList.remove('focused'));
        items[idx].classList.add('focused');
        input.value = items[idx].innerText;
    }
    showRelateList(wrapper) {
        wrapper.classList.add("has_value");
    }
    hideRelateList(wrapper) {
        wrapper.classList.remove("has_value");
    }
}

const element = {
    wrapper: document.querySelector("#search"),
    form: document.querySelector("#search > form"),
    input: document.querySelector("#search-input"),
    close: document.querySelector(".close button"),
    list: document.querySelector(".related_list"),
}
const search = new formSearch(element, 10);