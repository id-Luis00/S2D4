/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(base, altezza) {
    return base * altezza
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
let num1 = 2;
let num2 = 5;

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3
    }
    else {
        return num1 + num2;
    }
}



console.log(crazySum(num1, num2));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let diffNum = 10;

function crazyDiff(diffNum) {

    if ( diffNum > 19 ) {
        return Math.abs(diffNum - 19) * 3;
    }
    else {
        return Math.abs(diffNum - 19);
    }
    
}

console.log(crazyDiff(diffNum))



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let n = Math.floor(Math.random() * 400);

function boundary(n) {
    if (n > 20 && n <= 100 || n === 400) {
        return true
    }
    else {
        return false
    }
}

console.log(boundary(n))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let stringa = ' ';

function epify(stringa) {
    let nuovaStringa = 'EPICODE ' + stringa;
    return nuovaStringa;
}

console.log(epify(stringa))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let n6 = Math.floor(Math.random() * 31);

function check3and7(n6) {


    if (n6 > 0) {

        if (n6 % 3 === 0 || n6 % 7 === 0) {
            console.log('il numero', n6, 'è divisibile per 3 o 7')
        }

        else {
            console.log('il numero non è divisibile per 3 o 7')
        }

    }

    else {

        console.log('il numero è minore o uguale a 0')
    }



}

console.log(check3and7(n6));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const stringaSette = 'EPICODE';

function reverseString(stringaSette) {
    let stringaSeperata = [];
    let stringaInvertita = [];

    stringaSeperata = stringaSette.split('');
    stringaInvertita = stringaSeperata.reverse();

    const nuovaStringa = stringaInvertita.join('');

    return nuovaStringa;
}

console.log(reverseString(stringaSette));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const frase = 'che ne so qualsiasi va bene';

function upperFirst(stringa) {
    let stringaSeparata = stringa.split(' ');
    let stringaMaiuscola = [];
    console.log(stringaSeparata);

    for (i = 0; i < stringaSeparata.length; i++) {
        stringaMaiuscola += stringaSeparata[i].charAt(0).toUpperCase() + stringaSeparata[i].slice(1) + ' '
    }

    console.log(stringaMaiuscola)
}

console.log(upperFirst(frase))

// separiamo tutte le parole .split(' ');

// diciamo di fare .charAt(0).toUpperCase()

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

// metodo che elimina il primo e ultimo carattere? --->  .splice()

function cutString (stringa) {
    let newString = stringa.slice(1, -1);
    return newString;
} 
console.log(cutString('edinson'))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
