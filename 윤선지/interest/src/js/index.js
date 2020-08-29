import { connectComponents } from './utils.js'
import { interestComponent, Interest } from './interestComponent.js';

const root = document.querySelector('#app');

const init = async () => {
    const dom = await interestComponent();
    connectComponents(root, { dom: dom });
    const interest = new Interest();
};

init();

