import { getFetch } from './utils.js';
import { GNB_CLASS_NAMES } from './constants.js';

const makeTemplate = data => {
  return data.reduce((html, element) => {
    const { id, name, url } = element;
    return (html += `<div data-id=${id}><a href=${url}></a>${name}</div>`);
  }, '');
};

const gnbComponents = async () => {
  const data = await getFetch('menu');
  const { mainMenu, sideMenu } = data;
  const gnb = makeTemplate(mainMenu);
  const lnb = makeTemplate(sideMenu);
  return `<div class="${GNB_CLASS_NAMES.WRAP}">
    <div class="${GNB_CLASS_NAMES.GNB}">${gnb}</div>
    <div class=${GNB_CLASS_NAMES.LNB}>${lnb}</div>
  </div>`;
};

export default gnbComponents;
