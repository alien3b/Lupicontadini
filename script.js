// Controlla se ci sono sale in cache
let sale = JSON.parse(localStorage.getItem("sale")) || {};
aggiornaListaSale();

// Crea una nuova sala e la memorizza
function creaSala() {
    let nomeSala = document.getElementById("sala").value.trim();
    if (nomeSala && !sale[nomeSala]) {
        sale[nomeSala] = { giocatori: [] };
        localStorage.setItem("sale", JSON.stringify(sale));
        aggiornaListaSale();
    }
}

// Mostra le sale disponibili
function aggiornaListaSale() {
    let lista = document.getElementById("sale-list");
    lista.innerHTML = "";
    Object.keys(sale).forEach(sala => {
        let li = document.createElement("li");
        li.textContent = sala;
        li.onclick = () => entraSala(sala);
        lista.appendChild(li);
    });
}

// Entra in una sala e mostra la sezione dei giocatori
function entraSala(nomeSala) {
    localStorage.setItem("salaAttuale", nomeSala);
    document.getElementById("giocatori").style.display = "block";
}

// Aggiunge il giocatore alla sala
function uniscitiGioco() {
    let nomeSala = localStorage.getItem("salaAttuale");
    let nickname = document.getElementById("nickname").value.trim();
    if (nickname && !sale[nomeSala].giocatori.includes(nickname)) {
        sale[nomeSala].giocatori.push(nickname);
        localStorage.setItem("sale", JSON.stringify(sale));
        aggiornaListaGiocatori(nomeSala);
    }
}

// Aggiorna la lista dei giocatori in sala
function aggiornaListaGiocatori(nomeSala) {
    let lista = document.getElementById("giocatori-list");
    lista.innerHTML = "";
    sale[nomeSala].giocatori.forEach(giocatore => {
        let li = document.createElement("li");
        li.textContent = giocatore;
        lista.appendChild(li);
    });
}

// Assegna ruoli casuali e salva in CSV
function assegnaRuoli() {
    let nomeSala = localStorage.getItem("salaAttuale");
    let ruoli = ["Lupo", "Contadino", "Veggente", "Cacciatore", "Guaritore"];
    let giocatori = sale[nomeSala].giocatori;
    let distribuzione = {};

    // Assegna ruoli a caso
    giocatori.forEach(giocatore => {
        let ruolo = ruoli[Math.floor(Math.random() * ruoli.length)];
        distribuzione[giocatore] = ruolo;
    });

    // Mostra i ruoli assegnati (solo per il narratore)
    console.log("Ruoli assegnati:", distribuzione);

    // Salva in CSV
    let csvContent = "data:text/csv;charset=utf-8,Giocatore,Ruolo\n";
    Object.entries(distribuzione).forEach(([giocatore, ruolo]) => {
        csvContent += `${giocatore},${ruolo}\n`;
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${nomeSala}_ruoli.csv`);
    document.body.appendChild(link);
    link.click();
}