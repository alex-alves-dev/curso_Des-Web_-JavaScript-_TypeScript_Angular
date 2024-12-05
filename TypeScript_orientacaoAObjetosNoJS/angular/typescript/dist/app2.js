"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
/* ----criar carros ---*/
let carroA = new Carro('Dodge Journey', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Cerato', 4);
/* ---montar a lista de carros da concessionaria--- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/*  ---exibir a lista de carros---*/
//console.log(concessionaria.mostrarListaDeCarros())
/* ---Comprar o carro---*/
let cliente = new Pessoa('Joao', 'Veloster');
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        //
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
