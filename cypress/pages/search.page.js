export class searchPage{

    constructor(page){
        this.page=page;
        this.prodName="";
        this.userRating4starUp=cy.get('a[data-csa-categ-id="171485341"]');
        this.filterCheckbox=cy.get('input[type="checkbox"]');
        this.itemName=cy.get('.s-results-item-content h2')
        this.itemLink=cy.get('.s-results-item-content a')
    }

    selectRating(){
        this.userRating4starUp.click();
    }

    selectLanguage(lang){
        this.filterCheckbox.contains(lang).click();
    }

    getName(recordNum){
        const nthElement=recordNum-1;
        prodName= this.itemName.eq(nthElement).text();
    }

    clickProdLink(recordNum){
        const nthElement=recordNum-1;
        this.itemLink.eq(nthElement).click();
    }

}