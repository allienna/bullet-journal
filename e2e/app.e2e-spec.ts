import { BulletJournalPage } from './app.po';

describe('bullet-journal App', function() {
  let page: BulletJournalPage;

  beforeEach(() => {
    page = new BulletJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
