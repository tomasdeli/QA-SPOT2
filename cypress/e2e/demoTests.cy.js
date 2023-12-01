// ESTO NO ES PARTE DEL CÓDIGO, ES UN CAMPO DE PRUEBAS PARA PROBAR DIFERENTES APPROACHS Y SOLUCIONES

/// <reference types="Cypress" />

import LoginPage from "../page_objects/loginPage.js";
import NavBar from "../page_objects/navBar.js";
import SpotPage from "../page_objects/spotPage.js";
import Methods from "../page_objects/methods.js";

let loginPage = new LoginPage();
let navBar = new NavBar();
let spotPage = new SpotPage();
let methods = new Methods();
let testData;

before(() => {
    cy.fixture("demoTestData").then((data) => {
        testData = data;
    });
});


describe("Demo Test Set", () => {

    beforeEach(() => {
        methods.navigateTo("/");
        methods.logIn(testData.testCase1.email, testData.testCase1.password);
        navBar.clickOnAdminOption();
    })

    it("CP#24 / Búsqueda - ID", () => {
        spotPage.clickFilterTypeSelector();
        spotPage.clickFilterTypeListOption(testData.testCase1.option);
        spotPage.typeOnSearchBox(testData.testCase1.id);
        spotPage.validateFilterSingleResult(testData.testCase1.id);
    });

    it("CP#19 / Filtros - Aplicar filtro sin resultado", () => {
        spotPage.clickPrecioSelector();
        spotPage.enterMinPrecio(testData.testCase2.minPrice);
        spotPage.enterMaxPrecio(testData.testCase2.maxPrice);
        spotPage.clickApplyPrecioFilterBtn();
        spotPage.validateNoResultsMessage();
    });
});
