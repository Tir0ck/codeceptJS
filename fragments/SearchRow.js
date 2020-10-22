const { I } = inject();

module.exports = {

    input: {css: 'div.pR49Ae'},
    icon: {css: 'div.iblpc'},
    clearButton: {css: 'div.clear-button'},
    displayBoard: {css: 'div.J9leP'},
    voice: {css: 'div.hpuQDe'},

    dropDownMenu: {css: 'div.aajZCb'},
    dropDownItem: {css: 'ul.erkvQe li.sbct'},

    inputInSearch(request, search = false) {
        I.fillField(this.input, request);
        if (search) {
            I.pressKey('Enter');
        }
    }
}
