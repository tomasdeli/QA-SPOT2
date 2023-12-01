class NavBar {

    // Localizadores HTML //
    elements = {
        adminOption: () => cy.xpath('//a[@href="https://admin.staging.spot2.mx/admin/usuarios2"]'),
    }

        clickOnAdminOption() {
            this.elements.adminOption().click();
        };
};

export default NavBar;