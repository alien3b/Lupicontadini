// Array dei ruoli disponibili
const ruoli = [
    "Ruolo 1",
    "Ruolo 2",
    "Ruolo 3",
    "Ruolo 4",
    "Ruolo 5"
];

// Funzione per distribuire i ruoli
function distribuisciRuoli() {
    const messaggio = document.getElementById("message");
    const numeroRuoli = 7; // Numero di giocatori (modificabile)

    // Distribuire casualmente i ruoli
    let ruoliAssegnati = [];
    for (let i = 0; i < numeroRuoli; i++) {
        const ruolo = ruoli[Math.floor(Math.random() * ruoli.length)];
        ruoliAssegnati.push(ruolo);
    }

    // Mostrare i ruoli assegnati
    messaggio.innerHTML = "Ruoli distribuiti: <br>" + ruoliAssegnati.join("<br>");
}
