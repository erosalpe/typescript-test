var persona = {
    nome: 'luca',
    cognome: 'rossi',
    eta: 23,
    indirizzo: {
        via: 'giorgi',
        civico: 3,
        citta: 'milano',
    },
};
var array = [3, 2, 1];
var tupla = ['gino', 'franco'];
var union = 123;
var Ruolo;
(function (Ruolo) {
    Ruolo["ADMIN"] = "admin";
    Ruolo["USER"] = "user";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
var ruolo = Ruolo.ADMIN;
function somma(num1, num2) {
    return num1 + num2;
}
var prova;
prova = somma;
console.log(prova(4, 5, function () {
    console.log('funzione cb');
}));
console.log(persona);
console.log(array);
console.log(tupla);
console.log(union);
console.log(ruolo);
