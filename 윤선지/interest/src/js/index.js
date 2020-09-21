import { connectComponents } from './utils.js'
import { interestTemplate, Interest } from './interestComponent.js';

const root = document.querySelector('#app');

const init = async () => {
    const dom = await interestTemplate(
        {
            WRAP: 'inputText2'
        }
    );

    connectComponents(root, { dom: dom });
    const interest = new Interest();
};

init();

