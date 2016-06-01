export class Angular22Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-2-app h1')).getText();
  }
}
