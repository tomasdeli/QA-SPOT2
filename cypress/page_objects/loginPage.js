class LoginPage {

    // Localizadores HTML //
    elements = {
        emailField: () => cy.get('#email'),

        passwordField: () => cy.get('#password'),

        loginBtn: () => cy.xpath('//button[@type="submit"]'),
    }

        enterEmail(pEmail) {
            this.elements.emailField().type(pEmail);
        };
    
        enterPassword(pPassword) {
            this.elements.passwordField().type(pPassword);
        };

        clickLoginBtn() {
            this.elements.loginBtn().click();
        };
};

export default LoginPage;