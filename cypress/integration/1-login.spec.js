const baseUrl = "https://kasirdemo.belajarqa.com"
describe('login',()=>{
    it('login - positive',()=>{
        cy.visit(baseUrl)
        cy.get('input#email').type('jaya@gmail.com')
        cy.get('input#password').type('123456')
        cy.get('button[type="submit"]').click()
        cy.get('dd.chakra-stat__number.css-1axeus7').should('contain', 'hai');
    })

    it('login - negative invalid email',()=>{
        cy.visit(baseUrl);
        cy.get('input#email').type('jaya');
        cy.get('input#password').type('123456');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="alert"].chakra-alert').should('be.visible').contains('"email" must be a valid email');
    })

    it('login - negative invalid kredensial',()=>{
        cy.visit(baseUrl);
        cy.get('input#email').type('jaya@gmail.com');
        cy.get('input#password').type('12345');
        cy.get('button[type="submit"]').click();
        cy.get('div[role="alert"].chakra-alert').should('be.visible').contains('Kredensial yang Anda berikan salah');
    })
});