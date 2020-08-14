// Search TODO
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search__btn');
const recommendKeywordWrap = document.querySelector('.recommend-keyword');
const recommendKeywordLi = document.querySelector('.recommend-keyword ul');
const controlVisibleClass = 'hidden';
let emphasisedItem = '';

function resetResult() {
    recommendKeywordLi.innerHTML = '';
    expendResult(false);
};

function search(keyword) {
    alert(`${keyword} 검색`);
    searchInput.value = '';
    resetResult();
};

function handleSubmit(e) {
    e.preventDefault()
    let searchText = searchInput.value;

    if (e.target.classList.contains('keyword')) {
        searchText = e.target.innerText;
    }

    if (searchText === '') {
        alert('검색어를 입력해주세요.');
        return;
    }

    search(searchText);
};

function emphasisingItem(arr, emphasisString) {
    arr.forEach((splitedItem, i) => {
        emphasisedItem = arr[0];

        if (i > 0) {
            emphasisedItem += `<em>${emphasisString}</em>${splitedItem}`;
        }
    });
};

function checkAccessibilityExpended(boolean) {
    searchInput.setAttribute('aria-expanded', boolean);
};

function addHiddenClass() {
    if (!recommendKeywordWrap.classList.contains(controlVisibleClass)) {
        recommendKeywordWrap.classList.add(controlVisibleClass);
    }
};

function removeHiddenClass() {
    if (recommendKeywordWrap.classList.contains(controlVisibleClass)) {
        recommendKeywordWrap.classList.remove(controlVisibleClass);
    }
};

function expendResult(bool) {
    checkAccessibilityExpended(bool);

    if (bool) {
        removeHiddenClass();
        return;
    }

    addHiddenClass();
}

function appendHTML(keyword, data) {
    keyword.forEach((item, i) => {
        const splitItem = item.split(data);

        if (i > 10) return;
        emphasisingItem(splitItem, data);
        recommendKeywordLi.insertAdjacentHTML('beforeend', `<li><a href="#" class="keyword">${emphasisedItem}</a></li>`);
    });
};

function loadToKeywords(enteredData) {
    const filteredKeyword = keyword.filter(data => {
        return data.includes(enteredData);
    });

    if (!filteredKeyword.length) {
        resetResult();
        return;
    }

    expendResult(true);
    appendHTML(filteredKeyword, enteredData);
};

function handleInput() {
    const value = this.value;

    resetResult();
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
        if (e.target.classList.contains('close__btn')) resetResult();
    });
};

init();
