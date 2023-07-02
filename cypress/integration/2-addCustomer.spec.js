const baseUrl = "https://kasirdemo.belajarqa.com"
describe('add Customer',()=>{
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('input#email').type('jaya@gmail.com');
        cy.get('input#password').type('123456');
        cy.get('button[type="submit"]').click();
    });

    it('Positive - berhasil menambahkan customer', () => {
        cy.get('div.css-1mqa38q').contains('pelanggan').click();
        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
        cy.get('input#nama').type('bily');
        cy.get('input[data="no.hp,,function () { [native code] }"]').type('08222111444');
        cy.get('input#alamat').type('Alamat');
        cy.get('input#keterangan').type('Keterangan');
        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
        cy.get('div[role="alert"]').contains('item ditambahkan');
    });
    it('Negative - Menunjukan Eror ketika input data invalid pada kolom no hp', () => {
        cy.get('div.css-1mqa38q').contains('pelanggan').click();
        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
        cy.get('input#nama').type('Test User');
        cy.get('input[data="no.hp,,function () { [native code] }"]').type('abcdefghijklmn');
        cy.get('input#alamat').type('Test Alamat User');
        cy.get('input#keterangan').type('Test Keterangan User');
        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
        cy.get('div[role="alert"]').contains('"phone" must be a number');
      });
})