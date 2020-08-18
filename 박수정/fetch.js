class JsonToHTML {
    constructor(container, option) {
        this.container = container;
        this.fileName = option.fileName;
        this.mainKey = option.mainKey;
        this.subKey = option.subKey;

        this.init();
    }

    toJson(res) {
        return res.json();
    }

    UserComponent(users, mainKeyName, subKeyName) {
        console.log(users)
        const resultList = users[mainKeyName].map(obj => `<li>${obj[subKeyName]}</li>`).join("")
        return `<ul>${resultList}</ul>`
    }

    renderHtml(component, container) {
        document.querySelector(container).innerHTML = component;
    }

    init() {
        fetch(`https://baekcode.github.io/APIs/${this.fileName}.json`)
            .then(this.toJson)
            .then(res => this.UserComponent(res, this.mainKey, this.subKey))
            .then(componentHtml => this.renderHtml(componentHtml, this.container))
    }
}