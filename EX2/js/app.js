
//Si chiede all'utente di inserire un numero intero compreso tra 1 e 5 
let x; 
//Si usa il do..while per verificare se il numero inserito da tastiera è un valore valido e se è compreso tra 1 e 5
//Nella condizione del do..while si utilizza l'operatore OR per definire la condizione di uscita dal while
//Finchè l'utente inserisce un numero fuori dal range oppure non valido si continua a richiedere l'inserimento di un numero
do{
    x = parseInt(prompt("Inserisci un numero intero compreso tra 1 e 5")); // numero intero
} while (x<1 || x>5 || isNaN(x));
console.log('Numero inserito dall\'utente: ', x);

let scelta; // stringa: rappresenta la scelta dell'utente, (pari o dispari)
// si chiede all'utente di inserire la parola scelta
do{
    scelta = prompt("inserisci la tua scelta (pari o dispari)"); // stringa
} while (scelta!=='pari' && scelta!=='dispari');

//Viene generato casualmente un numero intero compreso tra 1 e 5 inclusi
//La funzione Math.random() genera un numero reale casuale compreso tra 0 e 1 escluso
//Per generare un numero intero casuale tra 1 e 5 inclusi si applica la funzione Math.floor() che permette di approssimare all'intero vicino più piccolo il valore Math.random()*5+1
//In questo modo l'intervallo di valori reali [0,1) viene trasformato nel range di numeri interi tra 1 e 5 compreso
const intRandom=Math.floor(Math.random()*5+1);  // numero intero compreso tra 1 e 5 incluso
console.log('Numero casuale: ', intRandom);

//Si somma il numero generato casualmente con il numero inserito da tastiera
const somma=intRandom+x;

//Si verifica se la variabile somma è un numero pari o dispari
//Se il resto della divisione della variabile somma per 2 è zero allora il numero è pari
if (somma%2==0)
    risultato='pari';
else 
    risultato='dispari';

//Si confronta la variabile risultato con la variabile scelta per verificare se l'utente ha indovinato
 if (risultato===scelta)   
     console.log('Hai vinto');
else 
   console.log('Non hai vinto');  