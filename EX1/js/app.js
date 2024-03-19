//definizione della funzione palindroma
//la funzione prende in input una stringa e restituisce una variabile booleana
function palindroma(parola) {
    
    //si usa il metodo split per dividere la stringa letta in input in un array di sottostringhe
    const stringSplit=parola.split('');  //array<String>, il vettore stringSplit contiene i singoli caratteri della parola 
    console.log('Vettore stringSplit che contiene i singoli caratteri della parola: ', stringSplit);
    
    const N=stringSplit.length  //numero: lunghezza della parola 
    
    const stringaInversa=[];  // array<String>, contiene la parola invertita
    
    // si usa un for per scandire il vettore stringSplit e generare il vettore che contiene la parola invertita
    // ogni carattere presente nel vettore stringSplit viene assegnato al vettore stringaInversa a partire dalla coda
    for (let i=0; i<N; i++) {  //numero: contatore del for
         // il vettore stringSplit viene analizzato dall'indice 0 fino all'indice N-1
         // il vettore stringaInversa viene scandito dalla posizione N-1 alla posizione 0
        stringaInversa[N-i-1]=stringSplit[i]; 
    }
    console.log('la parola invertita è: ', stringaInversa);
    // si usa la selezione per verificare se le due stringhe coincidono
    // la funzione restituisce un valore booleano
    // si usa il metodo toString per convertire gli array in stringhe
    if (stringSplit.toString() === stringaInversa.toString())  //si confrontano le due stringhe per verificare se sono uguali
        return true;   
    else
        return false;
    }
    
    //si chiede una parola 
    const p = prompt("Inserire una parola");  // string
    console.log('parola inserita:', p);
    // si invoca la funzione per verificare se la parola inserita è palindroma
    // si passa come parametro della funzione la variabile p che contiene la stringa da analizzare
    // la funzione restituisce un valore booleano: true se la funzione è palindroma, false se la funzione non è palindroma
    const r= palindroma(p);  //boolean: r contiene il valore restituito dalla funzione
    console.log('il valore restituito è: ', r);
    //si usa la selezione per stampare il risultato ottenuto
    if (r)  
        console.log('La parola è palindroma');
    else 
         console.log('La parola non è palindroma')
    