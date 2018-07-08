import { Test2Page } from './app.po';

describe('test2 App', () => {
  let page: Test2Page;

  beforeEach(() => {
    page = new Test2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
