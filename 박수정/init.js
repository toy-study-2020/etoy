const jsonOpt = {
    gnb: {
        mainMenu: {
            fileName: 'menu',
            mainKey: 'mainMenu',
            subKey: 'name'
        },
        sideMenu: {
            fileName: 'menu',
            mainKey: 'sideMenu',
            subKey: 'name'
        }
    }
}

const mainMenu = new JsonToHTML('.mainMenu', jsonOpt.gnb.mainMenu);
const sideMenu = new JsonToHTML('.sideMenu', jsonOpt.gnb.sideMenu);
