class JsonToHTML {
    constructor(container, option) {
        this.container = container;
        this.fileName = option.fileName;
        this.mainCategory = option.mainCategory

        this.init();
    }

    toJson(res) {
        return res.json();
    }

    UserComponent(users, mainCategory) {
        console.log(users)
        const isHaveTitle = users[mainCategory].title;
        const title = isHaveTitle ? `<h1>${users[mainCategory].title}</h1>`: '';
        const itemArr = isHaveTitle ? users[mainCategory].items : users[mainCategory];
        const resultList = itemArr.map(obj => {
            const img = obj.imgSrc ? `<div class="thumb__container"><img src="${obj.imgSrc}" alt=""></div>` : '';
            const url = obj.url ? `${obj.url}` : '#';
            return `<li><a href="${url}">${img}<p>${obj.name}</p></a></li>`
        }).join("")


        return `${title}<ul>${resultList}</ul>`
    }

    renderHtml(component, container) {
        document.querySelector(container).innerHTML = component;
    }

    init() {
        fetch(`https://baekcode.github.io/APIs/${this.fileName}.json`)
            .then(this.toJson)
            .then(res => this.UserComponent(res, this.mainCategory))
            .then(componentHtml => this.renderHtml(componentHtml, this.container))
    }
}