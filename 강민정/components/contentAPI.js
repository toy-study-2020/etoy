;(function() {
  'use strict';

  const API_URL = 'https://baekcode.github.io/APIs/';
  const API = function(args) {
    if (!args) {
      return;
    }

    this.data = args.data;
    this.name = args.name;
    this.type = args.type;
    this.class = args.className;

    this.dataObject = {};
    this.innerDOM = null;
    this.contentWrapper = document.querySelector('.content');
    this.loading = document.querySelector('.loadingWrap');

    this.wrapper = null;
    this.title = null;

    return this.setAPI();
  };

  API.prototype = {
    setAPI: function() {
      return fetch(`${API_URL}${this.data}.json` , {method: 'GET'})
        .then(response => response.json())
        .then(data => this.setDOM(data))
        .then(this.hiddenElement());
    },
    setDOM: function(data) {
      this.dataObject = data;
      this[this.type]();

      if (this.type !== 'category') {
        this.setWrapper();
        this.setTitle();
      }
      this.setList();
      this.insertEl(this.innerDOM);
    },
    hiddenElement: function() {
      this.loading.classList.add('hidden');
    },
    insertEl:function(inner) {
      this.elWrapper.innerHTML = inner;
      this.wrapper.insertAdjacentElement('beforeend', this.elWrapper);
    },
    setWrapper: function() {
      this.wrapper = this.createElement('div');
      this.wrapper.setAttribute('class', `${this.type}-wrapper`);
      this.contentWrapper.insertAdjacentElement('beforeend', this.wrapper);
    },
    setList: function() {
      this.elWrapper = this.createElement('ul');
      this.elWrapper.setAttribute('class', `${this.type}-list ${this.type}-${this.class}`);
    },
    setTitle: function() {
      this.title = this.dataObject[this.name].title;
      this.titleEl = document.createElement('h2');
      this.titleEl.innerHTML = this.title;
      this.wrapper.insertAdjacentElement('beforeend', this.titleEl)
    },
    category: function() {
      if (!document.querySelector(`.${this.type}-wrapper`))
        this.setWrapper();
      else
        this.wrapper = document.querySelector(`.${this.type}-wrapper`);

      this.innerDOM = this.dataObject[this.name].map((el, index) => {
        return `<li>
          <a href="${el.url}" title="${el.name}">
            <strong>${el.name}</strong>
          </a>
        </li>`;
      }).join('');
    },
    store: function() {
      this.innerDOM = this.dataObject[this.name].items.map((el, index) => {
        return `<li>
          <a href="#" title="${el.name}">
            <span class="imgWrap">
              <img src="${el.imgSrc}" alt="${el.imgAlt}" onerror="this.src='./components/error.jpg'">
            </span>
            <strong>${el.name}</strong>
          </a>
        </li>`;
      }).join('');
    },
    hot: function() {
      this.innerDOM = this.dataObject[this.name].items.map((el, index) => {
        return `<li>
          <a href="#" title="${el.name}">
            <span class="imgWrap">
              <img src="${el.imgSrc}" alt="${el.alt}" onerror="this.src='./components/error.jpg'">
            </span>
            <strong>${el.name}</strong>
            <span class="prdDescription">${el.description}</span>
            <span class="prdPrice">`
              + (function() {
                  if (el.originalPrice !== el.salePrice) {
                    return `<span class="prdOrigin">${el.originalPrice}<em>$</em></span>`;
                  }
                })() +
              `<span class="prdDiscount">${el.salePrice}<em>$</em></span>
            </span>
          </a>
        </li>`;
      }).join('');
    },
    chance: function() {
      this.innerDOM = this.dataObject[this.name].items.map((el, index) => {
        return `<li>
          <a href="#" title="${el.name}">
            <span class="imgWrap">
              <img src="${el.imgSrc}" alt="${el.alt}" onerror="this.src='./components/error.jpg'">
            </span>
            <span class="prdBadge">`
            +
              el.badge.map((a) => {
                return `<span>${a}</span>`;
              }).join('')
            +
            `</span>
            <strong>${el.name}</strong>
            <span class="prdPrice">`
          + (function() {
            if (el.originalPrice !== el.salePrice) {
              return `<span class="prdOrigin">${el.originalPrice}<em>$</em></span>`;
            }
          })() +
          `<span class="prdDiscount">${el.salePrice}<em>$</em></span>
            </span>
          </a>
        </li>`;
      }).join('');
    },
    event: function() {
      this.innerDOM = this.dataObject[this.name].items.map((el, index) => {
        return `<li>
          <a href="#" title="${el.name}">
            <span class="imgWrap">
              <img src="${el.imgSrc}" alt="${el.alt}" onerror="this.src='./components/error.jpg'">
            </span>
            <strong>${el.name}</strong>
            <span class="prdDescription">${el.description}</span>
          </a>
        </li>`;
      }).join('');
    },
    createElement: function(el) {
      return document.createElement(el);
    }
  };

  async function loadAPI() {
    const category = await new API({
      data: 'menu',
      name: 'mainMenu',
      type: 'category',
      className: 'best'
    });

    const subCategory = await new API({
      data: 'menu',
      name: 'sideMenu',
      type: 'category',
      className: 'sub'
    });

    const store = await new API({
      data: 'mainStore',
      name: 'mainStore',
      type: 'store',
      className: 'store'
    });

    const hot = await new API({
      data: 'mainBest',
      name: 'mainBest',
      type: 'hot',
      className: 'hot'
    });

    const event = await new API({
      data: 'mainEvent',
      name: 'mainEvent',
      type: 'event',
      className: 'event'
    });

    const chance = await new API({
      data: 'mainProducts',
      name: 'mainProducts',
      type: 'chance',
      className: 'chance'
    });
  };

  if (document.readyState === 'complete') {
    loadAPI();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', loadAPI);
  }
})();