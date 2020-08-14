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
      result: null
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
    this.wordFirstIndex = 0;
    this.toggleClass = 'active';
  };  Search.prototype.shuffle = function(data) {
    this.shuffle(this.data);
    this.input.addEventListener('keyup', this.open.bind(this));
    this.input.addEventListener('focus', this.open.bind(this));
    for (let i = data.length - 1; i > 0; i--) {
      let randomMath = Math.floor(Math.random() * (i + 1));
      let temp = data[i];
      data[i] = data[randomMath];
      data[randomMath] = temp;
    }
  Search.prototype.open = function() {
    this.isOpened = true;
    this.keyword = this.input.value.toLowerCase();

    if (this.keyword === '') {
      this.close();
      return;
    }


    if (event.keyCode === 40 || event.keyCode === 38) {
      this.selectResult(event.keyCode);
      return;
    }

    this.resultWrap.classList.add(this.toggleClass);
    this.recommend();

    if (this.result.querySelectorAll('li').length === this.wordFirstIndex) {
      this.close();
      return;
    }

    window.addEventListener('click', this.handlerSearch.bind(this));
  };
