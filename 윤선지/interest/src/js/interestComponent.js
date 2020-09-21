import { INTEREST_OBJ } from './constants.js';
import btnComponent from './btnComponent.js';

let interestTarget = {};

const interestTemplate = (setOpt) => {
    interestTarget = Object.assign(INTEREST_OBJ, setOpt);
    const {WRAP, BTNAREA, INPUT, PLACEHOLDER} = interestTarget;
    
    return `
    <div class="${WRAP}">
        <div class="${BTNAREA}"></div>
        <input 
            type="text" 
            class="${INPUT}" 
            placeholder="${PLACEHOLDER}"
        >
    </div>
    `;
};

class Interest {
    constructor () {
        this.el = document.querySelector(`.${interestTarget.WRAP}`);
        this.input = this.el.querySelector(`.${interestTarget.INPUT}`);
        this.btnArea = this.el.querySelector(`.${interestTarget.BTNAREA}`);
        this.division = interestTarget.DIVISION;
        this.deleteBtn = interestTarget.DELETE;
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
        this.btnArea.innerHTML = btnComponent(this.arr, interestTarget);
        this.reset();
    }
}

export { interestTemplate, Interest };