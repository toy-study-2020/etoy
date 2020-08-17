const searchElements = {
    textBx: '.search_text_bx',
    textInp: '.inp_text',
    listWrap: '.search_list_area',
    resultBx: '.search_list_bx',
    resultList: '.search_list',
    keywordbx: '.keyword_list_bx',
    closeBtn: '.btn_close',
    hiddenClass: 'hidden',
    itemClass: 'item'
};
const searchData = keyword;

function Searchform(el) {
    this.el = document.querySelector(el);
    this.obj = searchElements;
    this.data = searchData;
    this.init();
}

Searchform.prototype = {
    init: function() {
        this.setElement();
        this.eventBind();
    },

    setElement: function() {
        this.searchTextBx = this.el.querySelector(this.obj.textBx);
        this.searchText = this.searchTextBx.querySelector(this.obj.textInp);
        this.listWrap = this.el.querySelector(this.obj.listWrap);
        this.resultBx = this.el.querySelector(this.obj.resultBx);
        this.resultList = this.resultBx.querySelector(this.obj.resultList);
        this.keywordbx = this.el.querySelector(this.obj.keywordbx);
        this.closeBtn = this.el.querySelector(this.obj.closeBtn);
        this.resultItem = null;
        this.match = null;
        
        this.hiddenClass = this.obj.hiddenClass;
        this.itemClass = this.obj.itemClass;
        this.isResult = false;
        this.showCount = 10;
        this.itemLength = 0;
        this.pointer = 0;
        this.lstFirstIdx = 1;
    },

    eventBind: function() {
        this.searchText.addEventListener('click', this.displayList.bind(this));
        this.searchText.addEventListener('keyup', this.changeEvt.bind(this));
        this.closeBtn.addEventListener('click', this.hideList.bind(this));
        this.el.addEventListener('keydown', this.keyCodeEvt.bind(this));
        this.resultList.addEventListener('click', this.keyClick.bind(this));
    },

    displayList: function(e) {
        this.isResult = false;

        if (this.listWrap.classList.contains(this.hiddenClass)) {
            this.listWrap.classList.remove(this.hiddenClass);
        }
       
        if (e.target.value !== '') {
            this.keywordbx.classList.add(this.hiddenClass);
            this.resultBx.classList.remove(this.hiddenClass);
        } else {
            this.keywordbx.classList.remove(this.hiddenClass);
            this.resultBx.classList.add(this.hiddenClass);
        }
    },

    hideList: function(e) {
        this.isResult = false;
        
        if (!this.listWrap.classList.contains(this.hiddenClass)) {
            this.listWrap.classList.add(this.hiddenClass);
        }
    },

    changeEvt: function(e) {
        this.displayList(e);

        if (e.which === 13) {
            this.valuePrint();
            return
        };

        const searchWord = e.target.value,
              wordLength = e.target.value.length;

        this.match = this.data.filter(data => 
            searchWord === data.substr(0, wordLength)
        );

        if (this.match.length === 0) {
            this.emptyList(searchWord);
            return;
        } 
        if (e.target.value == '') {
            this.displayList(e);
            return;
        } 
        this.createList(wordLength);
    },

    emptyList: function(searchWord) {
        this.isResult = false;

        this.resultList.innerHTML = `<li><em>"${searchWord}"</em>검색 결과가 없습니다.</li>`;
    },

    createList: function(wordLength) {
        let listView = '';
        this.isResult = true;

        this.match.forEach((data, idx) => {
            if (idx > this.showCount) return;
            
            listView += `<li><a href="#" class="${this.itemClass}"><em>${data.substr(0, wordLength)}</em>${data.substr(wordLength)}</a></li>`;
        });

        this.resultList.innerHTML = listView;
        this.resultItem = this.resultList.querySelectorAll('li');
        this.itemLength = this.resultItem.length;       
    },

    keyCodeEvt: function(e) {
        if (!this.isResult) return;
        const keyCode = e.keyCode;

        switch (keyCode) {
            case 40 : 
                if (this.pointer > this.itemLength - this.lstFirstIdx) this.pointer = 0;
                this.pointer++;
                this.movePointer();
                break;

            case 38 :
                if (this.pointer <= this.lstFirstIdx) this.pointer = this.itemLength + this.lstFirstIdx;
                this.pointer--;
                this.movePointer();
                break;
        }
    },

    keyClick: function(e) {
        if (e.target.className !== this.itemClass) return;

        this.movePointer(e);
        this.valuePrint();
    },

    movePointer: function(e) {
        let target = e ? e.target : this.resultItem[this.pointer - this.lstFirstIdx].querySelector('a');
        
        target.focus();
        this.searchText.value = target.innerHTML.replace(/<(\/em|em)([^>]*)>/gi, '');
    },

    valuePrint: function() {
        console.log(this.searchText.value);

        this.hideList();
        this.pointer = 0;
    }
}

const search = new Searchform('.search_area');