class SpotPage {

    // Localizadores HTML //
    elements = {
        precioSelector: () => cy.xpath('/html/body/div/div[2]/header/div/div[2]/div/div/div[1]/div[4]/button'),
        minPrecioField: () => cy.xpath('//input[@data-testid="min_price"]'),
        maxPrecioField: () => cy.xpath('//input[@data-testid="max_price"]'),
        applyPrecioFilterBtn: () => cy.xpath('//button[@data-testid="apply-filters"]'),
        noResultsMessage: () => cy.xpath('/html/body/div/div[2]/main/div/div/div[1]/div[1]/h6'),
        
        filterTypeSelector: () => cy.xpath('/html/body/div/div[2]/header/div/div[1]/div[1]/div/div[2]/div/div/div[1]/div'),
        filterTypeList: () => cy.xpath('//ul[@role="listbox"]'),
        filterTypeOption: () => cy.xpath('//li[@data-value="id"]'),
        searchBox: () => cy.xpath('/html/body/div/div[2]/header/div/div[1]/div[1]/div/div[2]/div/div/div[3]'),
        
        resultTableP: () => cy.xpath('/html/body/div/div[2]/main/div/div/div[1]/div[1]/table/tbody/tr/td[3]/p')
    }

        clickPrecioSelector() {
            cy.wait(2000);
            this.elements.precioSelector().click();
            cy.wait(2000);
        };
        
        enterMinPrecio(pMinPrecio) {
            this.elements.minPrecioField().type(pMinPrecio);
        };

        enterMaxPrecio(pMaxPrecio) {
            this.elements.maxPrecioField().type(pMaxPrecio);
        };

        clickApplyPrecioFilterBtn() {
            this.elements.applyPrecioFilterBtn().click();
        };

        validateNoResultsMessage() {
            this.elements.noResultsMessage().should("be.visible");
        }

        clickFilterTypeSelector() {
            cy.wait(2000);
            this.elements.filterTypeSelector().click();
            cy.wait(2000);
        };

        clickFilterTypeListOption() {
            this.elements.filterTypeOption().click();
        };

        typeOnSearchBox(pText) {
            cy.wait(2000);
            this.elements.searchBox().type(pText);
        }

        validateFilterSingleResult(pText) {
            this.elements.resultTableP().should("have.text", pText);
        }
};

export default SpotPage;