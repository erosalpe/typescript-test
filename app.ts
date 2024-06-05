type Persona = {
    nome: string,
    cognome: string,
    eta: number,
    indirizzo: {
        via: string,
        civico: number,
        citta: string,
    },
} 
let persona: Persona = {
    nome: 'luca',
    cognome: 'rossi',
    eta: 23,
    indirizzo: {
        via: 'giorgi',
        civico: 3,
        citta: 'milano',
    },
};

const array: number[] = [3,2,1];

const tupla: [string, string] = ['gino', 'franco'];

let union: string | number = 123;

enum Ruolo {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
}

let ruolo = Ruolo.ADMIN;

function somma(num1: number, num2: number): number{
    return num1 + num2;
}

let prova: (x: number, y: number, cb: (result: string) =>void) => number;
prova = somma;

console.log(prova(4,5, ()=>{
    console.log('funzione cb');
}));
console.log(persona);
console.log(array);
console.log(tupla);
console.log(union);
console.log(ruolo);