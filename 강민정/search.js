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

    this.shuffle(this.data);

    this.input.addEventListener('keyup', this.open.bind(this));
    this.input.addEventListener('focus', this.open.bind(this));
    this.form.addEventListener('submit', this.submit.bind(this));
  };

  Search.prototype.shuffle = function(data) {
    for (let i = data.length - 1; i > 0; i--) {
      let randomMath = Math.floor(Math.random() * (i + 1));
      let temp = data[i];
      data[i] = data[randomMath];
      data[randomMath] = temp;
    }
  };

  Search.prototype.handlerSearch = function() {
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
  };

  Search.prototype.open = function() {
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
  };

  Search.prototype.close = function() {
    this.isOpened = false;
    this.resultWrap.classList.remove(this.toggleClass);
    window.removeEventListener('click', this.handlerSearch);
  };

  Search.prototype.createElement = function(el) {
    return document.createElement(el);
  };

  Search.prototype.appendResult = function(wrapper, direction, el, data) {
    if (data) {
      el.innerText = data;
    }
    this.result.insertAdjacentElement(direction, el);
  };

  Search.prototype.resultInit = function() {
    this.wordIndex = this.FIRST_INDEX;
    this.listArray = [];
    this.result.innerHTML = '';
  };

  Search.prototype.recommend = function() {
    this.resultInit();

    for(let i = 0; i < this.lengthData; i++) {
      if (this.data[i].toLowerCase().indexOf(this.keyword) > -1) {
        if (this.listArray.length < this.listLimit) {
          this.listArray.push(this.data[i]);
          this.list = this.createElement(this.resultEl);
          this.appendResult(this.result, 'afterbegin', this.list, this.data[i]);
        }
      }
    }
  };

  Search.prototype.selectResult = function(key) {
    this.wordList = this.result.querySelectorAll('li');
    this.wordLength = this.wordList.length;
    this.wordLastIndex = this.wordLength - 1;
    if (this.wordLength === this.FIRST_INDEX) {
      return;
    }
    this.moveWord(key === 40 ? 'down' : 'up');
  };

  Search.prototype.moveWord = function(direction) {
    if (!this.result.querySelector('.' + this.toggleClass)) {
      return this.wordList[this.FIRST_INDEX].classList.add(this.toggleClass);
    }

    for (let i = 0; i < this.wordLength; i++) {
      this.wordList[i].classList.remove(this.toggleClass);
    }

    if (direction === 'down') {
      this.wordIndex = this.wordIndex === this.wordLastIndex ? this.FIRST_INDEX : ++this.wordIndex;
    } else {
      this.wordIndex = this.wordIndex === this.FIRST_INDEX ? this.wordLastIndex : --this.wordIndex;
    }

    this.wordList[this.wordIndex].classList.add(this.toggleClass);
  };

  Search.prototype.submit = function() {
    event.preventDefault();
    if (this.result.querySelector('.' + this.toggleClass)) {
      return console.log(this.result.querySelector('.' + this.toggleClass).innerText);
    }

    console.log(this.input.value);
  };

  return {
    Search
  }
})();