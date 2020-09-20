const saveLocalStorage = arr => localStorage.setItem("currentInterest", JSON.stringify(arr));

const checkLocalStorage = () => localStorage.getItem("currentInterest")

export {
    saveLocalStorage,
    checkLocalStorage,
}