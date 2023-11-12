import { searchPage } from "./search.page";
import { productPage } from "./product.page";
import {prodName} from searchPage;
import {prodPrice} from productPage;

export class cartPage{

    constructor(page){
        this.page=page;
        this.deleteBtn=cy.get('.a-button.a-size-small.a-color-button.sc-amazon-cart-3-bLrq5O');
        this.itemDetails= cy.get('.a-size-medium a span');
    }

    verifytheItem(){
        this.itemDetails.contains(prodName);
        this.itemDetails.should('contain',prodPrice);
    }

    clearCart(){
        this.deleteBtn.click();
        this.itemDetails.should('contain', '0 items');
    }
}