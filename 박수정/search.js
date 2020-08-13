// Search TODO
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search__btn');
const recommendKeywordWrap = document.querySelector('.recommend-keyword');
let emphasisedItem = '';

function resetKeywords() {
    recommendKeywordWrap.innerHTML = '';
};

function handleSubmit(e) {
    e.preventDefault()
    let searchText = searchInput.value;

    if (e.target.classList.contains('keyword')) {
        searchText = e.target.innerText;
    } 

    alert(`${searchText} 검색`);
    searchInput.value = '';
    resetKeywords();
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

    filteredKeyword.forEach((item, i) => {
        const splitItem = item.split(enteredData);

        if (i > 10) return;
        emphasisingItem(splitItem, enteredData);
        recommendKeywordWrap.insertAdjacentHTML('beforeend', `<li><a href="#" class="keyword">${emphasisedItem}</a></li>`);
    });
};

function handleInput() {
    const value = this.value;

    resetKeywords();
    if (value.length) loadToKeywords(value);
};

function init() {
    searchInput.addEventListener('input', handleInput);
    searchForm.addEventListener('submit', handleSubmit);
    searchBtn.addEventListener('click', handleSubmit);
    document.addEventListener('click', function (e) {
        if (e.target.className === 'keyword') handleSubmit(e);
    });
};

init();
