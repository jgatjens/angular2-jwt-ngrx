import { CareersPage } from './app.po';

describe('careers App', function() {
  let page: CareersPage;

  beforeEach(() => {
    page = new CareersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
