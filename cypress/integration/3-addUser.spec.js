const baseUrl = "https://kasirdemo.belajarqa.com"
describe('add User',()=>{
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('input#email').type('jaya@gmail.com');
        cy.get('input#password').type('123456');
        cy.get('button[type="submit"]').click();
    });

    it('Positive - berhasil menambahkan user', () => {
        cy.get('div.css-1mqa38q').contains('pengguna').click();
        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
        cy.get('input#nama.chakra-input.css-ksd4gw').type('tes');
        cy.get('input#email.chakra-input.css-ksd4gw').type('tes@gmail.com');
        cy.get('input#password.chakra-input.css-2s2hk4').type('tes123');
        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
        cy.get('div[role="alert"]').contains('item ditambahkan');
    });

    it('Negative - Error format email invalid', () => {
        cy.get('div.css-1mqa38q').contains('pengguna').click();
        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
        cy.get('input#nama.chakra-input.css-ksd4gw').type('tes');
        cy.get('input#email.chakra-input.css-ksd4gw').type('tesgmail.com');
        cy.get('input#password.chakra-input.css-2s2hk4').type('tes123');
        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
        cy.get('div[role="alert"]').contains('"email" must be a valid email');
    });
    
})