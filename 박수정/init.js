const jsonOpt={
    gnb: {
        mainMenu: {
            fileName: 'menu',
            mainCategory: 'mainMenu',
            markup: function(obj) {
                return `<li>
                            <a href="${obj.url}">
                                <p>${obj.name}</p>
                            </a>
                        </li>`
            }
        },
        sideMenu: {
            fileName: 'menu',
            mainCategory: 'sideMenu',
            markup: function (obj) {
                return `<li>
                            <a href="${obj.url}">
                                <p>${obj.name}</p>
                            </a>
                        </li>`
            }
        }
    },
    section: {
        mainStore: {
            fileName: 'mainStore',
            mainCategory: 'mainStore',
            markup: function (obj) {
                return `<li>
                            <a href="#">
                                <div class="thumb__container">
                                    <img src="${obj.imgSrc}" alt="">
                                </div>
                                <p>${obj.name}</p>
                            </a>
                        </li>`
            }
        },
        mainBest: {
            fileName: 'mainBest',
            mainCategory: 'mainBest',
            markup: function (obj) {
                return `<li>
                            <a href="#">
                                <div class="thumb__container">
                                    <img src="${obj.imgSrc}" alt="${obj.alt}">
                                    <div class="label>
                                        <p class="label--discountRate">${obj.labels.typeDiscountRate}</p>
                                        <p class="label--discountFee">${obj.labels.typeDiscountFee}</p>
                                    </div>
                                </div>
                                <div class="info__container">
                                    <dl>
                                        <dt>${obj.name}</dt>
                                        <dd>${obj.description}</dd>
                                    </dl>
                                    <div class="info--price">` +
                                        (function() {
                                            if (obj.originalPrice !== obj.salePrice) {
                                                return `<p class="price--original>
                                                    <span class="blind>정상가</span>${obj.originalPrice}
                                                </p>`
                                            }

                                            return '';
                                        })() +
                                        `<p class="price--sale>
                                            <span class="blind>할인가</span>${obj.salePrice}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>`
            }
        },
        mainEvent: {
            fileName: 'mainEvent',
            mainCategory: 'mainEvent',
            markup: function (obj) {
                    return `<li>
                            <a href="#">
                                <div class="thumb__container">
                                    <img src="${obj.imgSrc}" alt="${obj.alt}">
                                </div>
                                <div class="info__container">
                                    <p>${obj.name}</p>
                                    <span>${obj.description}</span>
                                </div>
                            </a>
                        </li>`
            }
        },
        mainProducts: {
            fileName: 'mainProducts',
            mainCategory: 'mainProducts',
            markup: function (obj) {
                return `<li>
                            <a href="#">
                                <div class="thumb__container">
                                    <img src="${obj.imgSrc}" alt="${obj.alt}">
                                </div>
                                <div class="info__container">
                                    <p>${obj.name}</p>
                                    <ul>` + 
                                        obj.badge.reduce((acc, cur) => {
                                            return acc += `<li>${cur}</li>`;
                                        }, '') +
                                    `</ul>
                                </div>
                            </a>
                        </li>`
            }
        }
    }
}

const mainMenu=new JsonToHTML('.mainMenu', jsonOpt.gnb.mainMenu);
const sideMenu=new JsonToHTML('.sideMenu', jsonOpt.gnb.sideMenu);
const mainStore=new JsonToHTML('.mainStore', jsonOpt.section.mainStore);
const mainBest=new JsonToHTML('.mainBest', jsonOpt.section.mainBest);
const mainEvent=new JsonToHTML('.mainEvent', jsonOpt.section.mainEvent);
const mainProducts=new JsonToHTML('.mainProducts', jsonOpt.section.mainProducts);
