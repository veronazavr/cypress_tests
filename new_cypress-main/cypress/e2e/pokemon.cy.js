describe('Покупка аватара', function () {
    it('тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('verochkabelowa@gmail.com');
        cy.get('#password').type('Veronika1002');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(11) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Veronika Belova');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();
        cy.get('.top_menu_exit').click();
        
  })