"use strict";
let persona = {
    nome: 'luca',
    cognome: 'rossi',
    eta: 23,
    indirizzo: {
        via: 'giorgi',
        civico: 3,
        citta: 'milano',
    },
};
const array = [3, 2, 1];
const tupla = ['gino', 'franco'];
let union = 123;
var Ruolo;
(function (Ruolo) {
    Ruolo["ADMIN"] = "admin";
    Ruolo["USER"] = "user";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
let ruolo = Ruolo.ADMIN;
function somma(num1, num2) {
    return num1 + num2;
}
let prova;
prova = somma;
class Cane {
    constructor(nome, razza) {
        this.nome = nome;
        this.razza = razza;
    }
    parla() {
        console.log(`Ciao sono ${this.nome} e sono un ${this.razza}`);
    }
    saluta(cane) {
        console.log(`Ciao ${cane.nome} io sono ${this.nome} e sono un ${this.razza}`);
    }
}
class IlMioCane {
    constructor(nome, razza, giocoPreferito) {
        this.nome = nome;
        this.razza = razza;
        this.giocoPreferito = giocoPreferito;
    }
    static getInstance() {
        if (IlMioCane.instance) {
            return this.instance;
        }
        this.instance = new IlMioCane('franco', 'carlino', 'pallina');
        return this.instance;
    }
    presenta() {
        console.log(`Ciao io sono ${this.nome} sono un ${this.razza} e il mio gioco prefetiro è la ${this.giocoPreferito}`);
    }
}
let cane1 = new Cane('luna', 'bassotto');
let cane2 = new Cane('stella', 'alano');
console.log(prova(4, 5, () => {
    console.log('funzione callback chiamata!');
}));
console.log(persona);
console.log(array);
console.log(tupla);
console.log(union);
console.log(ruolo);
console.log(cane1);
cane1.parla();
cane2.saluta(cane1);
IlMioCane.getInstance().presenta();
