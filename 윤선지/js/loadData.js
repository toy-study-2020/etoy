const rootURL = 'https://baekcode.github.io/APIs/';

class GetData {
  constructor(opt) {
    this.el = document.querySelector(opt.container);
    this.templateUrl = opt.template;
    this.template = '';
    this.url = opt.url;
  }

  async load() {
    await fetch(this.url)
    .then(res => res.json())
    .then(success =>
      this.bind(success)
    )
  }

  async bind(resURL) {
    await fetch(this.templateUrl)
    .then(res => res.text())
    .then(success => {
      this.template = Handlebars.compile(success)
      this.el.innerHTML = this.template(resURL)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gnb = new GetData({
    url: rootURL + 'menu.json',
    container: '.header_area',
    template: 'js/hbs/gnb.hbs'
  });
  gnb.load();
  
  const brand = new GetData({
    url: rootURL + 'mainStore.json',
    container: '.brand_area',
    template: 'js/hbs/brand.hbs'
  });
  brand.load();

  const hotdeal = new GetData({
    url: rootURL + 'mainBest.json',
    container: '.best_hotdeal_area',
    template: 'js/hbs/hotdeal.hbs'
  });
  hotdeal.load();

  const exhibition = new GetData({
    url: rootURL + 'mainEvent.json',
    container: '.exhibition_area',
    template: 'js/hbs/exhibition.hbs'
  });

  exhibition
    .load()
    .then(() => { let slider = new Slider('.slider_exhibition');});

  const chance = new GetData({
    url: rootURL + 'mainProducts.json',
    container: '.chance_area',
    template: 'js/hbs/chance.hbs'
  });
  chance.load();
});


