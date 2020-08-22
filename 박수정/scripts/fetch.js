class JsonToHTML {
    constructor(container, option) {
        this.container = container;
        this.fileName = option.fileName;
        this.mainCategory = option.mainCategory;
        this.markup = option.markup;

        this.init();
    }

    toJson(res) {
        return res.json();
    }

    UserComponent(users, mainCategory, markup) {
        const isHaveTitle = users[mainCategory].title;
        const title = isHaveTitle ? `<h1>${users[mainCategory].title}</h1>`: '';
        const itemArr = isHaveTitle ? users[mainCategory].items : users[mainCategory];
        const resultList = itemArr.reduce((acc, cur) => {
            return acc += markup(cur);
        }, '');

        return `${title}<ul>${resultList}</ul>`
    }

    renderHtml(component, container) {
        document.querySelector(container).innerHTML = component;
    }

    init() {
        fetch(`https://baekcode.github.io/APIs/${this.fileName}.json`)
            .then(this.toJson)
            .then(res => this.UserComponent(res, this.mainCategory, this.markup))
            .then(componentHtml => this.renderHtml(componentHtml, this.container))
    }
}