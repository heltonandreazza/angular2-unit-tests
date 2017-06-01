import { Angular2UnitTestsPage } from './app.po';

describe('angular2-unit-tests App', function() {
  let page: Angular2UnitTestsPage;

  beforeEach(() => {
    page = new Angular2UnitTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
