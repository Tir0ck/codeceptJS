Feature('Search Page');

Scenario('test something', ({ I, searchPage }) => {
    I.amOnPage('https://google.com');
    I.seeElement(searchPage.mainImage);
    I.seeElement(searchPage.searchRow);
});
