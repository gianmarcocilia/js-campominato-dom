### Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
****
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

### SVOLGIMENTO
- Al click del bottone Gioca:
    - Prelevo la difficoltà selezionata nel `<select>`, ed in base alla difficoltà definire X numero di celle.
    - Generare un array di 16 numeri casuali e non ripetuti compresi tra 1 e X numero di celle.
    - Definire il numero di click consentiti per le bombe evitate: X - 16. Di conseguenza creare di numeri "non bombe" che vengono cliccati così da avere il punteggio della partita.
    - Mostrare la griglia.
    - Creare X celle per ogni per ogni numero compreso tra 1 e X numero di celle:
        - Creare la cella.
        - Settare la dimensione della cella in base alla difficoltà.
        - Inserire il numero nella cella.
        - Aggiungere un eventListner "click" ad ogni cella con le seguenti istruzioni:
            - Leggo il numero della cella cliccata
            - SE il numero della cella cliccata è presente nell'array contente i numeri delle 16 bombe, la cella diventa di colore rosso ed assegniamo la sconfitta al giocatore.
             ALTRIMENTI la cella diventa azzurra ed inserisco il numero cliccato in un array di numeri non bombe (effettuo anche un controllo che eviti di inserire più volte la stessa cella).
            - SE la lunghezza dell'array di numeri non bombe è uguale alla lunghezza dell'array del numero definito di click consentiti (X - 16) il gioco finisce ed assegniamo la vittoria al giocatore
    - Aggiungere con .append ogni cella alla griglia.

