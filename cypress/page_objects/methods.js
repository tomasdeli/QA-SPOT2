// Aquí se guardan métodos no asociados a una página en específico, que se utilizan de manera global
class Methods {
    
    // navegar a la página que se envíe por parámetro
    navigateTo (pUrl) {
        cy.visit(pUrl);
    };

    // esperar una cantidad determinada de tiempo (mls)
    waitThisTime (pTime) {
        cy.wait(pTime);
    };

    logIn(pEmail, pPassword) {
        cy.logIn(pEmail, pPassword);
    }

    validateVacancyExists(pVacancyName) {
        cy.validateVacancyExists(pVacancyName)
    };
};

export default Methods;