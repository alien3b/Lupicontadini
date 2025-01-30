// Array dei ruoli disponibili
const ruoli = [
    "Ruolo 1",
    "Ruolo 2",
    "Ruolo 3",
    "Ruolo 4",
    "Ruolo 5"
];

// Funzione per scegliere il ruolo
function scegliRuolo(ruolo) {
    // Nascondi la selezione iniziale
    document.querySelector('h1').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    if (ruolo === 'narratore') {
        // Mostra la sezione per il narratore
        document.getElementById('narratore').style.display = 'block';
    } else {
        // Mostra la sezione per il giocatore
        document.getElementById('giocatore').style.display = 'block';
        // Assegna un ruolo casuale al giocatore
        const ruoloGiocatore = ruoli[Math.floor(Math.random() * ruoli.length)];
        document.getElementById('ruoloGiocatore').innerText = `Il tuo ruolo è: ${ruoloGiocatore}`;
    }
}

// Funzione per distribuire i ruoli
function distribuisciRuoli() {
    const messaggio = document.getElementById("message");
    const numeroGiocatori = parseInt(document.getElementById("numeroGiocatori").value);

    // Distribuire casualmente i ruoli
    let ruoliAssegnati = [];
    for (let i = 0; i < numeroGiocatori; i++) {
        const ruolo = ruoli[Math.floor(Math.random() * ruoli.length)];
        ruoliAssegnati.push(ruolo);
    }

    // Mostrare i ruoli assegnati
    messaggio.innerHTML = "Ruoli distribuiti: <br>" + ruoliAssegnati.join("<br>");
}
