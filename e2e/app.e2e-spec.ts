import { CaAppPage } from './app.po';

describe('ca-app App', function() {
  let page: CaAppPage;

  beforeEach(() => {
    page = new CaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
