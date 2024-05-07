/// <reference types="cypress" />

import Faturamento from '../support/page_objects/Faturamento';

//variaveis armazenando as massas de dados
let produto = require('../fixtures/produtos.json')
let dadosEndereco = require('../fixtures/Endereco.json')
let dadosLogin = require('../fixtures/perfil.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    beforeEach(() => {
        cy.visit('minha conta')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //faz o login com o comando customizado "Login" e com a massa de dados "perfil.json"
        cy.login(dadosLogin.usuario, dadosLogin.senha)

        //seleciona os produtos com o comando customizado "selecaoProdutos" e com a massa de dados "produtos"
        cy.selecaoProdutos(produto[0].produto, produto[0].tamanho, produto[0].cor, produto[0].quantidade)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.selecaoProdutos(produto[1].produto, produto[1].tamanho, produto[1].cor, produto[1].quantidade)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.selecaoProdutos(produto[2].produto, produto[2].tamanho, produto[2].cor, produto[2].quantidade)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.selecaoProdutos(produto[3].produto, produto[3].tamanho, produto[3].cor, produto[3].quantidade)

        cy.carrinho()

        //preenche com os dados do faturamento(usando a classe criada no Page Object e a massa de dados 'Endereco' na pasta fixtures)
        Faturamento.EnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].rua,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].cel,
            dadosEndereco[0].email)

        


    });

});

