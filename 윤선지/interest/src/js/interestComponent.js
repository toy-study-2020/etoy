import { INTEREST_OBJ } from './constants.js';
import btnComponent from './btnComponent.js';

const interestComponent = async() => {
    return `
    <div class="${INTEREST_CLASS_NAME.WRAP}">
        <div class="${INTEREST_CLASS_NAME.BTNAREA}"></div>
        <input 
            type="text" 
            class="${INTEREST_CLASS_NAME.INPUT}" 
            placeholder="${INTEREST_OPT_NAME.PLACEHOLDER}"
        >
    </div>
    `;
};

class Interest {
    constructor () {
        this.el = document.querySelector(`.${INTEREST_CLASS_NAME.WRAP}`);
        this.input = this.el.querySelector(`.${INTEREST_CLASS_NAME.INPUT}`);
        this.btnArea = this.el.querySelector(`.${INTEREST_CLASS_NAME.BTNAREA}`);
        this.division = INTEREST_OPT_NAME.DIVISION;
        this.speed = INTEREST_OPT_NAME.SPEED;
        this.deleteBtn = INTEREST_CLASS_NAME.DELETE;
        this.arr = [];
        this.input.addEventListener('keyup', e => this.onCreateItem(e));
        this.input.addEventListener('keydown', e => this.onDeleteItem(e));
        this.el.addEventListener('click', e => this.onDeleteClick(e));
    }

    onCreateItem(e) {
        const key = e.keyCode;
        let value = "";

        if (key !== 188) return;
        
        value = e.target.value.trim();
        this.validator(value + this.division);
    }

    onDeleteItem(e) {
        const key = e.keyCode;

        if (key !== 8) return;
        if (e.target.value) return;

        this.arr = this.arr.filter(item => item.id != this.arr.length);
        this.updateView();
    }

    onDeleteClick(e) {
        if (e.target.className !== this.deleteBtn) return;

        const id = e.target.dataset.id;
        this.arr = this.arr.filter(item => item.id != id);
        this.updateView();
    }

    validator(value) {
        const pointer = value.indexOf(this.division);

        if (pointer === 0) return this.reset();
        const text = value.slice(0, pointer);
        this.add(text);
    }

    reset() {
        this.input.value = '';
    }

    add(val) {
        this.arr.push({
            id: this.arr.length + 1,
            item: val
        });
        
        this.updateView();
    }

    updateView () {
        this.btnArea.innerHTML = btnComponent(this.arr);
        this.reset();
    }
}

export { interestComponent, Interest };