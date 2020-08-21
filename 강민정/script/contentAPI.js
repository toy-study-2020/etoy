;(function() {
  'use strict';

  const API_URL = 'https://baekcode.github.io/APIs/';
  const API = function(args) {
    if (!args) {
      return;
    }

    const defaults = {
      data: null,
      name: null,
      subName: null,
      wrapper: null
    }

    this.data = args.data ? args.data : defaults.data;
    this.name = args.name ? args.name : defaults.name;
    this.subName = args.subName ? args.subName : defaults.subName;
    this.wrapper = document.querySelector(args.wrapper ? args.wrapper : defaults.wrapper);
    this.loading = document.querySelector('.loadingWrap');
    this.dataObject = {};
    this.DOMArray = [];
    this.innerDOM = null;

    this.alt = null;
    this.url = null;
    this.imgSrc = null;
    this.description = null;
    this.originPrice = null;
    this.price = null;

    this.setAPI();

  };

  API.prototype = {
    setAPI: function() {
      fetch(API_URL + this.data, {method: 'GET'})
        .then(response => response.json())
        .then(data =>
          this.setObject(data)
        );
    },
    setObject: function(data) {
      this.dataObject = Object.assign(data);
      this.setDOM();
    },
    setDOM: function() {
      this.DOMArray =
        this.name && this.subName
          ? this.dataObject[this.name][this.subName]
          : !this.subName && this.name
          ? this.dataObject[this.name]
          : this.dataObject;

      if (this.DOMArray.length < 1) return this.wrapper.parentNode.removeChild(this.wrapper);
      this.title = this.dataObject[this.name].title ? this.dataObject[this.name].title : '';

      if (this.title !== '') {
        this.setTitle();
      }

      this.innerDOM = this.DOMArray.map((el, i) => {
        this.setEl(el);

        return `<li data-key="${this.name + '' + i}">
          <a href="${this.url}" title="${this.name} 바로가기">
            ${this.labels}
            ${this.imgSrc}
            ${this.badge}
            ${this.name}
            ${this.description}
            ${this.price}
          </a>
        </li>`;
      });

      this.writeDOM();
    },
    setTitle: function() {
        this.titleEl = document.createElement('h2');
        this.titleEl.innerHTML = this.title;
        this.wrapper.insertAdjacentElement('beforebegin', this.titleEl)
    },
    setEl: function(el) {
      this.name = `<strong>${el.name}</strong>`;
      this.alt =
        el.imgAlt
          ? el.imgAlt
          : el.alt
          ? el.alt
          : el.name;
      this.url = el.url ? el.url : '#';
      this.imgSrc =
        el.imgSrc
          ? `<span class="imgWrap"><img src="${el.imgSrc}" alt="${this.alt}"></span>`
          : '';
      this.description = el.description ? `<span class="prdDescription">${el.description}</span>` : '';
      this.originPrice =
        !el.originalPrice || (Number(el.salePrice) === Number(el.originalPrice))
          ? ''
          : `<span class="prdOrigin">${el.originalPrice}<em>$</em></span>`;
      this.discountPrice = el.salePrice ? `<span class="prdDiscount">${el.salePrice}<em>$</em></span>` : '';
      this.price = `<span class="prdPrice">${this.originPrice}${this.discountPrice}</span>`;

      this.rate = el.labels && el.labels.typeDiscountRate  ? `<span class="prdRate">${el.labels.typeDiscountRate}</span>` : '';
      this.fee = el.labels && el.labels.typeDiscountFee ? `<span class="prdFee">${el.labels.typeDiscountFee}</span>` : '';
      this.labels = el.labels ? `<span class="prdPercent">${this.rate}${this.fee}</span>` : '';

      this.badge = el.badge && el.badge.length > 0 ? `<span class="prdBadge">${el.badge.map(el => {return `<span>${el}</span>`}).join('')}</span>` : '';
    },
    writeDOM: function() {
      this.wrapper.innerHTML = this.innerDOM.join('');
      setTimeout(function() {
        this.loading.parentNode.removeChild(this.loading);
      }.bind(this), 1000);
    }
  };

  const domReady = () => {
    const category = new API({
      data: 'menu.json',
      name: 'mainMenu',
      wrapper: '.categoryBest'
    });

    const subCategory = new API({
      data: 'menu.json',
      name: 'sideMenu',
      wrapper: '.categorySub'
    });

    const store = new API({
      data: 'mainStore.json',
      name: 'mainStore',
      title: 'title',
      subName: 'items',
      wrapper: '.storeList'
    });

    const hot = new API({
      data: 'mainBest.json',
      name: 'mainBest',
      title: 'title',
      subName: 'items',
      wrapper: '.hotList'
    });

    const event = new API({
      data: 'mainEvent.json',
      name: 'mainEvent',
      title: 'title',
      subName: 'items',
      wrapper: '.eventList'
    });

    const chance = new API({
      data: 'mainProducts.json',
      name: 'mainProducts',
      title: 'title',
      subName: 'items',
      wrapper: '.chanceList'
    });

  };

  if (document.readyState === 'complete') {
    domReady();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', domReady);
  }
})();