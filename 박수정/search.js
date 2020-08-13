// Search TODO
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search__btn');
const recommendKeywordWrap = document.querySelector('.recommend-keyword');
const recommendKeywordLi = document.querySelector('.recommend-keyword ul');
const controlVisibleClass = 'hidden';
let emphasisedItem = '';

function disabledResult() {
    recommendKeywordLi.innerHTML = '';
    addHiddenClass();
};

function handleSubmit(e) {
    e.preventDefault()
    let searchText = searchInput.value;

    if (e.target.classList.contains('keyword')) {
        searchText = e.target.innerText;
    } 

    alert(`${searchText} 검색`);
    searchInput.value = '';
    disabledResult();
};

function emphasisingItem(arr, emphasisString) {
    arr.forEach((splitedItem, i) => {
        emphasisedItem = arr[0];

        if (i > 0) {
            emphasisedItem += `<em>${emphasisString}</em>${splitedItem}`;
        }
    });
};

function addHiddenClass() {
    if (!recommendKeywordWrap.classList.contains(controlVisibleClass)) {
        recommendKeywordWrap.classList.add(controlVisibleClass);
    }
}

function removeHiddenClass() {
    if (recommendKeywordWrap.classList.contains(controlVisibleClass)) {
        recommendKeywordWrap.classList.remove(controlVisibleClass);
    }
}

function loadToKeywords(enteredData) {
    const filteredKeyword = keyword.filter(data => {
        return data.includes(enteredData);
    });

    if (!filteredKeyword.length) {
        disabledResult();
        return;
    }

    removeHiddenClass();

    filteredKeyword.forEach((item, i) => {
        const splitItem = item.split(enteredData);

        if (i > 10) return;
        emphasisingItem(splitItem, enteredData);
        recommendKeywordLi.insertAdjacentHTML('beforeend', `<li><a href="#" class="keyword">${emphasisedItem}</a></li>`);
    });
};

function handleInput() {
    const value = this.value;

    disabledResult();
    if (!value.length) return;
    loadToKeywords(value);
};

function init() {
    searchInput.addEventListener('input', handleInput);
    searchForm.addEventListener('submit', handleSubmit);
    searchBtn.addEventListener('click', handleSubmit);
    document.addEventListener('click', e => {
        if (e.target.classList.contains('keyword')) handleSubmit(e);
    });
    document.addEventListener('click', e => {
        if (e.target.classList.contains('close__btn')) disabledResult();
    });
};

init();
