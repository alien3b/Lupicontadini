let giocatori = [];
let ruoli = ['Ruolo1', 'Ruolo2', 'Ruolo3', 'Ruolo4']; // Aggiungi qui tutti i ruoli disponibili

// Funzione per il narratore di avviare il gioco
function iniziaGioco() {
    document.getElementById('fase-narratore').style.display = 'block';
    document.getElementById('fase-giocatore').style.display = 'none';
}

// Funzione per i giocatori di scegliere un nome
function scegliNome() {
    const nome = document.getElementById('nome').value;
    if (nome !== '') {
        const idGiocatore = 'giocatore-' + Math.random().toString(36).substr(2, 9);
        giocatori.push({ id: idGiocatore, nome: nome, ruolo: '' });
        localStorage.setItem(idGiocatore, JSON.stringify({ nome: nome, ruolo: '' }));
        document.getElementById('fase-giocatore').style.display = 'none';
        document.getElementById('fase-ruolo').style.display = 'block';
        document.getElementById('ruoloGiocatore').textContent = 'In attesa del narratore...';
    }
}

// Funzione per il narratore di distribuire i ruoli
function distribuisciRuoli() {
    const numeroGiocatori = parseInt(document.getElementById('numeroGiocatori').value);
    if (numeroGiocatori > 0 && numeroGiocatori <= giocatori.length) {
        const ruoliDistribuiti = [];
        for (let i = 0; i < numeroGiocatori; i++) {
            const ruolo = ruoli[Math.floor(Math.random() * ruoli.length)];
            ruoliDistribuiti.push(ruolo);
        }

        // Assegna i ruoli ai giocatori
        giocatori.forEach((giocatore, index) => {
            giocatore.ruolo = ruoliDistribuiti[index];
            localStorage.setItem(giocatore.id, JSON.stringify(giocatore));
        });

        // Mostra i ruoli dei giocatori al narratore
        document.getElementById('fase-narratore-ruoli').style.display = 'block';
        const listaRuoli = document.getElementById('ruoliGiocatori');
        listaRuoli.innerHTML = '';
        giocatori.forEach((giocatore) => {
            const li = document.createElement('li');
            li.textContent = `${giocatore.nome}: ${giocatore.ruolo}`;
            listaRuoli.appendChild(li);
        });

        // Mostra il ruolo al giocatore
        document.getElementById('fase-ruolo').style.display = 'block';
        document.getElementById('ruoloGiocatore').textContent = `Il tuo ruolo: ${giocatori.find(giocatore => giocatore.id === localStorage.getItem('idGiocatore')).ruolo}`;
    }
}