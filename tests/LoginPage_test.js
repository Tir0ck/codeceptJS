const { I, loginPage } = inject();

Feature('Login Page');

Scenario('test that all elements display properly', ({ I}) =>{
    I.amOnPage('https://accounts.google.com/signin');

    I.seeElement(loginPage.logo);
    I.see('Вход', loginPage.header);
    I.see('Используйте аккаунт Google', loginPage.subHeader);

    I.seeElement(loginPage.emailField);
    I.see('Забыли адрес электронной почты?', loginPage.forgotEmailButton);

    I.see('Работаете на чужом компьютере? Включите гостевой режим.', loginPage.guestModeTitle);
    I.seeElement(loginPage.guestModeButton);

    I.seeElement(loginPage.createAccountButton);
    I.seeElement(loginPage.nextButton);

    I.seeElement(loginPage.language);
    I.see('Справка', loginPage.footerCommonButton);
    I.see('Конфиденциальность', loginPage.footerCommonButton);
    I.see('Условия', loginPage.footerCommonButton);
});
