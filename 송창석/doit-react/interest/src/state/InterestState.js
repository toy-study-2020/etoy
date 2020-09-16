const setStorage = arr => localStorage.setItem("currentInterest", arr);

const getStorage = () => localStorage.getItem("currentInterest") != null ? localStorage.getItem("currentInterest").split(",").filter(it => it !== "") : []

export {
    setStorage,
    getStorage,
}