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
  };