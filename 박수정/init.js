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
    }
}

const mainMenu = new JsonToHTML('.mainMenu', jsonOpt.gnb.mainMenu);
const sideMenu = new JsonToHTML('.sideMenu', jsonOpt.gnb.sideMenu);
const mainStore = new JsonToHTML('.mainStore', jsonOpt.section.mainStore);
