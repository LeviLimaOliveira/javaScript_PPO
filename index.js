class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando`)
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }

    bebendo(){
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa("Leví", "Oliveira");
const p2 = new Pessoa("Isaac", "Newton");
const p3 = new Pessoa("Albert", "Einstein");
const p4 = new Pessoa("Richard", "Feynman");

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)