const setUrl = (fileName) => {
    return `https://baekcode.github.io/APIs/${fileName}.json`
}

const toJson = (res) => {
    return res.json()
}

const fetchJson = (url) => {
    return fetch(url)
        .then(toJson)
}

const setElement = (selector) => {
    const wrapper = document.querySelector(selector)

    return {
        title: wrapper.querySelector(".title"),
        list: wrapper.querySelector("ul")
    }
}
const gnbElement = (selector) => {
    const gnb = document.querySelector(selector)

    return {
        main: gnb.querySelector(".main_list"),
        side: gnb.querySelector(".side_list")
    }
}

const setComponent = (data, name, cb) => {
    const dataMenu = data[name]
    const list = dataMenu.reduce((acc, value, index) => {
        return acc += cb(value, index)
    }, "")

    return list;
}

const renderHtml = (targetEle, component) => targetEle.innerHTML = component