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

const setElement = (selector, key) => {
    const wrapper = document.querySelector(selector)
    const target = wrapper.querySelector(key)

    return target
}

const setComponent = (data, name, cb) => {
    const dataMenu = data[name]
    const list = dataMenu.reduce((acc, value, index) => {
        return acc += cb(value, index)
    }, "")

    return list;
}

const renderHtml = (targetEle, component) => targetEle.innerHTML = component