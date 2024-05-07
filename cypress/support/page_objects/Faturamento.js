class Faturamento {

    EnderecoFaturamento(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, cel, email) {
        //preenchendo nomes
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)

        //preenchendo informações de localidade
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)

        //preenchendo informações de contato
        cy.get('#billing_phone').clear().type(cel)
        cy.get('#billing_email').clear().type(email)

        //escolhe o metodo de pagamento, da check nos termos e finaliza o pedido
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        //Resultado esperado
        cy.get('.page-title').should('exist', 'Pedido recebido')

    }

}

export default new Faturamento()