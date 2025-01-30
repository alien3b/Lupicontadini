// Lista di ruoli disponibili (modificabile a seconda delle necessità)
const ruoli = ["Narratore", "Giocatore 1", "Giocatore 2", "Giocatore 3", "Giocatore 4", "Giocatore 5", "Giocatore 6"];

// Gestire il clic sul bottone per assegnare il ruolo
document.getElementById("scegliRuoloButton").onclick = function() {
    // Recupera il nome inserito dal giocatore
    const nomeGiocatore = document.getElementById("nomeGiocatore").value;

    // Verifica se è stato inserito un nome
    if (nomeGiocatore === "") {
        alert("Per favore, inserisci il tuo nome!");
        return;
    }

    // Seleziona un ruolo casuale dalla lista
    const ruolo = ruoli[Math.floor(Math.random() * ruoli.length)];

    // Visualizza il ruolo assegnato
    document.getElementById("ruoloAssegnato").innerText = `${nomeGiocatore}, il tuo ruolo è: ${ruolo}`;

    // Cambia il testo del bottone per indicare che il ruolo è stato scelto
    document.getElementById("scegliRuoloButton").innerText = "Ruolo scelto!";
    document.getElementById("scegliRuoloButton").disabled = true; // Disabilita il bottone dopo la selezione
}