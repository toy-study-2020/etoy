import {ELEMENT, MAGIC_NUMBER, CLASS_NAME} from './constants/constants.js';
import {utils} from './utils/utils.js';

class Interest {
  constructor() {
    this.container = ELEMENT.CONTAINER;
    this.wrapper = null;
    this.list = CLASS_NAME.LIST;
    this.target = null;
    this.value = null;
    this.text = null;
    this.tagText = null;
    this.buttonDelete = null;
    this.tagTarget = null;
    this.removeTagKey = null;

    this.char = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_]+([,\s])/;
    this.tagList = [];

    this.tagKey = MAGIC_NUMBER.ZERO;
    this.lastIndex = MAGIC_NUMBER.LAST_INDEX;

    this.createEl = utils.createEl;
    this.addElement = utils.addElement;

    this.init();
  }

  init() {
    this.createWrapper();
    this.createInput();
    this.input.focus();
    this.input.addEventListener('keyup', this.getValue.bind(this));
  };

  createWrapper() {
    this.wrapper = this.createEl('div');
    this.wrapper.setAttribute('class', CLASS_NAME.WRAPPER);
    this.addElement(this.container, 'afterbegin', this.wrapper);
    this.wrapper.innerHTML = `${ELEMENT.INNER_ELEMENT}`;
    this.list = this.wrapper.querySelector(`.${this.list}`);
  };

  createInput() {
    this.input = this.createEl('input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('class', CLASS_NAME.INPUT);
    this.addElement(this.list, 'afterbegin', this.input);
  };

  getValue() {
    this.target = event.target;
    this.value = this.target.value;
    this.result = this.char.exec(this.value);

    if (this.result) {
      this.text = this.result.input.replace(/([,|\s])/, '');
      this.createTag(this.text);
      this.clearInput();
    }

    if (this.input.value === ',' || this.input.value === ' ') {
      this.clearInput();
    }

    if (this.input.value === '' && event.keyCode === 8) {
      this.removeTag();
    }
  };

  createTag() {
    this.tag = this.createEl('span');
    this.tag.innerHTML = `${ELEMENT.TAG}${ELEMENT.BUTTON.DELETE}`

    this.tagText = this.tag.children[MAGIC_NUMBER.ZERO];
    this.buttonDelete = this.tag.children[this.tag.children.length + this.lastIndex];

    this.setTag();
    this.setArray(this.text);
    this.tag.addEventListener('click', this.removeTag.bind(this));
  };

  setTag() {
    this.tag.setAttribute('class', CLASS_NAME.TAG.WRAPPER);
    this.tag.setAttribute('data-key', `tagKey-${this.tagKey}`);
    this.buttonDelete.setAttribute('data-target', `tagKey-${this.tagKey}`);
    this.tagText.innerText = this.text;
    this.addElement(this.input, 'beforebegin', this.tag);
  }

  removeTag() {
    if (this.tagKey + this.lastIndex < 0) return;
    if (!this.input.previousElementSibling) return;

    this.tagTarget = event.target;
    this.dataKey =
      event.type === 'click'
        ? `${this.tagTarget.getAttribute('data-target')}`
        : `${this.input.previousElementSibling.getAttribute('data-key')}`;

    this.list.removeChild(this.list.querySelector(`span[data-key="${this.dataKey}"]`));
    this.removeArray(event.type);
    this.input.focus();
  }

  removeArray(type) {
    if (type === 'click') this.tagList.splice(this.dataKey.replace('tagKey-', ''), 1);
    else this.tagList.pop();

    this.setArrayLength();
  }

  setArray(text) {
    this.tagList.push(text);
    this.setArrayLength();
  };

  setArrayLength() {
    this.tagKey = this.tagList.length;
  };

  clearInput() {
    this.input.value = '';
  };
}

const interest = new Interest();
