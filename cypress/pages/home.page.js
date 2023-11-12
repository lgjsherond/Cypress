export class homePage{

    constructor(page){
        this.page=page;
        this.accountListLnk=cy.get('#nav-link-accountList-nav-line-1');
        this.categoryDropDown=cy.get('#searchDropdownBox');
        this.searchTextBox=cy.get('#twotabsearchtextbox');
        this.searchSubmit=cy.get('#nav-search-submit-button');
    }

    clickAccountList(){
        this.accountListLnk.click();
    }

    switchCategory(type){
        this.categoryDropDown.select(type);
        this.categoryDropDown.should('have.value', 'search-alias=amzn1.2&field-keywords=books');
    }

    searchItem(searchItem){
       this.searchTextBox.click().type(searchItem);
       this.searchSubmit.click();
    }
}