const {I, mainPage, resultPage, navigationPanel, searchRow, infoRow, locationRow} = inject();

Feature('Search Page');

Scenario('test that all elements display properly', ({ I}) => {
    I.amOnPage('https://google.com');

    I.seeElement(mainPage.mainImage);
    I.seeElement(mainPage.searchRow);

    I.see('Почта', navigationPanel.mail);
    I.see('Картинки', navigationPanel.images);
    I.seeElement(navigationPanel.apps);
    I.see('Войти', navigationPanel.loginButton);

    I.seeAttributesOnElements(mainPage.searchButton, {value: 'Поиск в Google'});
    I.seeAttributesOnElements(mainPage.luckButton, {value: 'Мне повезёт!'});

    I.seeElement(locationRow.general);
    I.seeElement(infoRow.common);
    I.seeElement(infoRow.settings);
});

Scenario('check elements from search row and dropdown menu', ({ I}) => {
    I.amOnPage('https://google.com');

    I.seeElement(searchRow.icon);
    I.seeElement(searchRow.displayBoard);
    I.seeElement(searchRow.voice);

    searchRow.inputInSearch(1);

    I.seeElement(searchRow.clearButton);
    I.seeElement(searchRow.dropDownMenu);
    I.seeNumberOfVisibleElements(searchRow.dropDownItem, 10);
});

Scenario('check navigation after searching', ({ I}) => {
    I.amOnPage('https://google.com');

    searchRow.inputInSearch(1, true);

    I.waitForVisible(resultPage.allScope);
});
