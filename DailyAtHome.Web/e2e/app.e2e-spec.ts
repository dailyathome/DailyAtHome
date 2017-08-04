import { DailyAtHomePage } from './app.po';

describe('daily-at-home App', () => {
  let page: DailyAtHomePage;

  beforeEach(() => {
    page = new DailyAtHomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
