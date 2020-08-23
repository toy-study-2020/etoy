import { connecComponents } from './utils.js';
import gnbComponents from './gnbComponents.js';

const root = document.querySelector('#app');

const run = async () => {
  const gnb = await gnbComponents();
  connecComponents(root, { gnb: gnb });
};

run();
