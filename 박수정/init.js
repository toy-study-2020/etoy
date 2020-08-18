const jsonOpt = {
    gnb: {
        mainMenu: {
            fileName: 'menu',
            mainCategory: 'mainMenu',
        },
        sideMenu: {
            fileName: 'menu',
            mainCategory: 'sideMenu'
        }
    },
    section: {
        mainStore: {
            fileName: 'mainStore',
            mainCategory: 'mainStore'
        },
        mainBest: {
            fileName: 'mainBest',
            mainCategory: 'mainBest'
        },
        mainEvent: {
            fileName: 'mainEvent',
            mainCategory: 'mainEvent'
        },
        mainProducts: {
            fileName: 'mainProducts',
            mainCategory: 'mainProducts'
        }
    }
}

const mainMenu = new JsonToHTML('.mainMenu', jsonOpt.gnb.mainMenu);
const sideMenu = new JsonToHTML('.sideMenu', jsonOpt.gnb.sideMenu);
const mainStore = new JsonToHTML('.mainStore', jsonOpt.section.mainStore);
const mainBest = new JsonToHTML('.mainBest', jsonOpt.section.mainBest);
const mainEvent = new JsonToHTML('.mainEvent', jsonOpt.section.mainEvent);
const mainProducts = new JsonToHTML('.mainProducts', jsonOpt.section.mainProducts);
