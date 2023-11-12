import { searchPage } from "./search.page";
import { prodName } from searchPage

export class productPage{

    constructor(page){
        this.page=page;
        this.prodPrice=0;
        this.productName=cy.get('.a-section h1');
        this.unitPrice=cy.get('.a-section.a-spacing-medium .a-size-medium.a-color-price');
        this.quantity=cy.get('#quantity');
        this.addtoCart=cy.get('#add-to-cart-button-button');
        this.gotoCart=cy.get('.a-button.a-button-size-medium.a-button-primary.a-color-button');
    }

    getUnitPrice(){
        prodPrice =this.unitPrice.text();
    }

    verifytheProduct(){
        this.productName.should('contains',prodName);
    }

    setTheQuantity(unit){
        this.quantity.select('2');
    }

    clickAddtoCart(){
        this.addtoCart.click();
    }

    clickGotoCart(){
        this.gotoCart.click();
    }

    backtoResultsPage(){

    }
}