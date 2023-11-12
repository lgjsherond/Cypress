export class loginPage{

    constructor(page){
        this.page=page;
        this.emailTextBox=cy.get('#ap_email'),
        this.continueBtn=cy.get('.a-button-inner > #continue'),
        this.passwordBox=cy.gett('#ap_password'),
        this.submitBtn=cy.get('#signInSubmit')
    }
    
    enterEmailandSubmit(email){
        this.emailTextBox.click().type(email);
        this.continueBtn.click();
    }

    enterPassword(password){
        this.passwordBox.click().type(password);
        this.submitBtn.click();
    }

    forgotYourPassword(){

    }

    otherIssues(){

    }

    createYourAccount(){

    }

}