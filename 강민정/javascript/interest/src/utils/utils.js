const utils = {
  createEl: function(el) {
    return document.createElement(el);
  },
  addElement: function(wrapper, direction, el) {
    wrapper.insertAdjacentElement(direction, el);
  }
}

export {utils};