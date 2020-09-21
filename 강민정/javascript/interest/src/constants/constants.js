const TEXT = {
  TITLE: '관심사'
}

const MAGIC_NUMBER = {
  ZERO: 0,
  LAST_INDEX: -1
}

const CLASS_NAME = {
  WRAPPER: 'interestWrapper',
  LIST: 'interestList',
  INPUT: 'interestInput',
  TAG: {
    WRAPPER: 'interestEl',
    TEXT: 'insertText'
  },
  BUTTON: {
    DELETE: 'Delete'
  }
}

const ELEMENT = {
  CONTAINER: document.querySelector('#app'),
  INNER_ELEMENT: `<strong>${TEXT.TITLE}</strong><div class="${CLASS_NAME.LIST}"></div>`,
  TAG: `<span class="${CLASS_NAME.TAG.TEXT}"></span>`,
  BUTTON: {
    DELETE: `<button type="button" class="button${CLASS_NAME.BUTTON.DELETE}">삭제</button>`
  }
};

export {ELEMENT, MAGIC_NUMBER, CLASS_NAME};
