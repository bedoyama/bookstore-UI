'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /book-list when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/book-list");
  });


  describe('book-list', function() {

    beforeEach(function() {
      browser.get('index.html#!/book-list');
    });


    it('should render book-list when user navigates to /book-list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('book-detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/book-detail');
    });


    it('should render book-detail when user navigates to /book-detail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
