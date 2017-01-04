import { Issue13530Page } from './app.po';

describe('issue13530 App', function() {
  let page: Issue13530Page;

  beforeEach(() => {
    page = new Issue13530Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
