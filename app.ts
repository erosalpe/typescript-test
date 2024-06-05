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

class Cane{

    constructor(private nome: string, private razza: string){
    }

    parla(): void{
        console.log(`Ciao sono ${this.nome} e sono un ${this.razza}`);
    }

    saluta(cane: Cane): void{
        console.log(`Ciao ${cane.nome} io sono ${this.nome} e sono un ${this.razza}`)
    }
}

class IlMioCane{
    private static instance: IlMioCane;

    private constructor(private nome: string, private razza: string, private giocoPreferito: string){
    }

    static getInstance(){
        if(IlMioCane.instance){
            return this.instance
        }

        this.instance = new IlMioCane('franco', 'carlino', 'pallina');
        return this.instance;
    }

    presenta(){
        console.log(`Ciao io sono ${this.nome} sono un ${this.razza} e il mio gioco prefetiro è la ${this.giocoPreferito}`)
    }
}

let cane1: Cane = new Cane('luna', 'bassotto');

let cane2: Cane = new Cane('stella', 'alano');

console.log(prova(4,5, ()=>{
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