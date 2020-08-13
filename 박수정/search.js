// Search TODO
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const recommendKeywordWrap = document.querySelector('.recommend-keyword');
let emphasisedItem = '';

function handleSubmit(e) {
    e.preventDefault()
    searchInput.value = '';
};

function resetKeywords() {
    recommendKeywordWrap.innerHTML = '';
};

function emphasisingItem(arr, emphasisString) {
    arr.forEach((splitedItem, i) => {
        emphasisedItem = arr[0];

        if (i > 0) {
            emphasisedItem += `<em>${emphasisString}</em>${splitedItem}`;
        }
    });
};

function loadToKeywords(enteredData) {
    const filteredKeyword = keyword.filter(data => {
        return data.includes(enteredData);
    });

    filteredKeyword.forEach(function(item) {
        const splitItem = item.split(enteredData);

        emphasisingItem(splitItem, enteredData);
        recommendKeywordWrap.insertAdjacentHTML('beforeend', `<li><a href="#">${emphasisedItem}</a></li>`);
    });
};

function handleInput() {
    const value = this.value;

    resetKeywords();
    if (value.length) loadToKeywords(value);
};

function init() {
    searchForm.addEventListener('submit', handleSubmit);
    searchInput.addEventListener('input', handleInput);
};

init();
