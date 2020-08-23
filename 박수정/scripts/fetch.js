class JsonToHTML {
    constructor(container, option) {
        this.container = container;
        this.fileName = option.fileName;
        this.category = option.category;
        this.markup = option.markup;

        this.init();
    }

    toJson(res) {
        return res.json();
    }

    UserComponent(users, category, markup) {
        const isHaveTitle = users[category].title;
        const title = isHaveTitle ? `<h1>${users[category].title}</h1>`: '';
        const itemArr = isHaveTitle ? users[category].items : users[category];
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
            .then(res => this.UserComponent(res, this.category, this.markup))
            .then(componentHtml => this.renderHtml(componentHtml, this.container))
    }
}