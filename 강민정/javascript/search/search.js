const search = (function() {
  'use strict';
  const Search = function(args) {
    if (!args) {
      return;
    }

    const defaults = {
      form: null,
      input: 'input[type="search"]',
      buttonSubmit: 'button[type="submit"]',
      resultWrap: null,
      result: null,
      FIRST_INDEX: 0
    }

    this.wrapper = document.querySelector(args.wrapper ? args.wrapper : args);
    this.form = this.wrapper.querySelector('form');
    this.input = this.wrapper.querySelector(args.input ? args.input : defaults.input);
    this.buttonSubmit = this.wrapper.querySelector(args.buttonSubmit ? args.buttonSubmit : defaults.buttonSubmit);
    this.resultWrap = this.wrapper.querySelector(args.resultWrap ? args.resultWrap : defaults.resultWrap);
    this.result = this.resultWrap.querySelector(args.result ? args.result : defaults.result);
    this.resultEl = 'li';
    this.list = null;
    this.listArray = [];
    this.listLimit = 10;
    this.data = args.data ? args.data : null;
    this.lengthData = this.data.length;
    this.isOpened = false;
    this.keyword = null;
    this.wordList = null;
    this.FIRST_INDEX = defaults.FIRST_INDEX;
    this.toggleClass = 'active';
    this.inputValue = null;
    this.keywordLength = null;
    this.keywordHTML = null;

    this.shuffle(this.data);

    this.input.addEventListener('keyup', this.open.bind(this));
    this.form.addEventListener('submit', this.submit.bind(this, this.input.value));
  };

  Search.prototype = {
    shuffle: function(data) {
      for (let i = data.length - 1; i > 0; i--) {
        let randomMath = Math.floor(Math.random() * (i + 1));
        let temp = data[i];
        data[i] = data[randomMath];
        data[randomMath] = temp;
      }
    },
    handlerSearch: function() {
      if (this.isOpened) {
        this.target = window.event.target;
        while (this.target !== undefined && this.target.parentNode) {
          if (this.target === this.wrapper) {
            return;
          }
          this.target = this.target.parentNode;
        }
        this.close();
      }
    },
    open: function() {
      this.isOpened = true;
      this.keyword = this.input.value.toLowerCase();

      if (this.keyword === '') {
        return this.close();
      }

      if (event.keyCode === 40 || event.keyCode === 38) {
        return this.selectResult(event.keyCode);
      }

      this.resultWrap.classList.add(this.toggleClass);
      this.recommend();

      if (this.result.querySelectorAll('li').length === this.FIRST_INDEX) {
        return this.close();
      }

      window.addEventListener('click', this.handlerSearch.bind(this));
    },
    close: function() {
      this.isOpened = false;
      this.resultWrap.classList.remove(this.toggleClass);
      window.removeEventListener('click', this.handlerSearch);
      window.removeEventListener('click', this.eventResult);
    },
    resultInit: function() {
      this.wordIndex = this.FIRST_INDEX;
      this.listArray = [];
      this.result.innerHTML = '';
    },
    recommend: function() {
      this.resultInit();
      this.result.addEventListener('click', this.eventResult.bind(this));

      for(let i = 0; i < this.lengthData; i++) {
        if (this.data[i].toLowerCase().indexOf(this.keyword) > -1) {
          if (this.listArray.length >= this.listLimit) return;

          this.insertArray(i);
        }
      }
    },
    eventResult: function() {
      this.target = event.target;
      if (this.target.tagName !== 'LI') return;
      this.submit(this.target.innerText);
    },
    selectResult: function(key) {
      this.wordList = this.result.querySelectorAll('li');
      this.wordLength = this.wordList.length;
      this.wordLastIndex = this.wordLength - 1;

      if (this.wordLength === this.FIRST_INDEX) return;
      this.moveWord(key === 40 ? 'down' : 'up');
    },
    moveWord: function(direction) {
      if (!this.result.querySelector('.' + this.toggleClass)) {
        return this.moveInit();
      }

      this.removeSelected();

      if (direction === 'down') {
        this.wordIndex = this.wordIndex === this.wordLastIndex ? this.FIRST_INDEX : ++this.wordIndex;
      } else {
        this.wordIndex = this.wordIndex === this.FIRST_INDEX ? this.wordLastIndex : --this.wordIndex;
      }

      this.wordList[this.wordIndex].classList.add(this.toggleClass);
      this.changeValue(this.wordList[this.wordIndex].innerText);
    },
    moveInit: function() {
      if (!this.result.querySelector('.' + this.toggleClass)) {
        this.changeValue(this.wordList[this.FIRST_INDEX].innerText);
        return this.wordList[this.FIRST_INDEX].classList.add(this.toggleClass);
      }
    },
    removeSelected: function() {
      for (let i = 0; i < this.wordLength; i++) {
        this.wordList[i].classList.remove(this.toggleClass);
      }
    },
    submit: function(value) {
      event.preventDefault();
      if (this.result.querySelector('.' + this.toggleClass)) {
        return console.log(this.result.querySelector('.' + this.toggleClass).innerText);
      }
      this.inputValue = value || this.input.value;
      this.changeValue(this.inputValue);
      console.log(this.inputValue);
    },
    changeValue: function(value) {
      this.input.value = value;
    },
    insertArray: function(index) {
      this.listArray.push(this.data[index]);
      this.list = this.createElement(this.resultEl);
      this.appendResult(this.result, 'afterbegin', this.list, this.data[index]);
    },
    createElement: function(el) {
      return document.createElement(el);
    },
    appendResult: function(wrapper, direction, el, data) {
      if (data) {
        this.keywordLength = this.keyword.length;
        this.keywordHTML = data.replace(this.keyword, `<em>` + this.keyword + `</em>`);
        el.innerHTML = `<a href="#">` + this.keywordHTML + `</a>`;
      }
      this.result.insertAdjacentElement(direction, el);
    }
  };

  return {
    Search
  }
})();