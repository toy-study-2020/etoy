const templateSource = `
    {{#each arr}}
    <div class="unit" data-id={{id}}>
        <div>{{item}}</div>
        <button type="button" class="btn_delete" name="{{btnDelete}}" data-id={{id}}>X</button>
    </div>        
    {{/each}}
`;

const defaults = {
    inputText: '.input_text',
    btnArea: '.btn_area',
    deleteBtn: 'btn_delete',
    division: ',',
    speed: 200,
};

class Interest {
    constructor (container, template, opt) {
        this.el = document.querySelector(container);
        this.template = Handlebars.compile(template);
        this.setOpt = Object.assign(defaults, opt);
        
        this.input = this.el.querySelector(this.setOpt.inputText);
        this.btnArea = this.el.querySelector(this.setOpt.btnArea);
        this.division = this.setOpt.division;
        this.speed = this.setOpt.speed;
        this.deleteBtn = this.setOpt.deleteBtn;
        this.arr = [];
        this.isWrite = false;
        
        this.el.addEventListener('keypress', e => this.onCreateItem(e));
        this.el.addEventListener('keydown', e => this.onDeleteItem(e));
        this.el.addEventListener('click', e => this.onDeleteClick(e));
    }

    onCreateItem(e) {
        const key = e.keyCode;
        let value = "";

        if (key !== 44) return;
        if (this.isWrite !== false) return;

        this.isWrite = true;
        value = e.target.value;
        setTimeout(function() {
            this.validator(value + this.division);
            this.isWrite = false;
        }.bind(this), this.speed);
    }

    onDeleteItem(e) {
        const key = e.keyCode;

        if (key !== 8) return;
        if (this.isWrite !== false) return;

        this.arr = this.arr.filter(item => item.id != this.arr.length);
        this.updateView();
    }

    onDeleteClick(e) {
        if (e.target.name !== this.deleteBtn) return;

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
            item: val,
            btnDelete: this.deleteBtn
        });
        
        this.updateView();
    }

    updateView () {
        this.btnArea.innerHTML = this.template({ arr: this.arr });
        this.reset();
    }
}

const interest = new Interest('.input_text_area', templateSource);
