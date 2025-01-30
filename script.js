let isNarrator = false;
let players = [];
let roles = {};
let rolesAssigned = false;

// Gestisce la scelta del ruolo (Narratore o Giocatore)
function selectRole(role) {
    if (role === 'narrator') {
        isNarrator = true;
        document.getElementById('narratorOptions').style.display = 'block';
        document.getElementById('playerOptions').style.display = 'none';
        document.getElementById('gameResults').style.display = 'none';
    } else {
        isNarrator = false;
        document.getElementById('narratorOptions').style.display = 'none';
        document.getElementById('playerOptions').style.display = 'block';
        document.getElementById('gameResults').style.display = 'none';
    }
}

// Aggiunge un giocatore alla lista
function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        players.push(playerName);
        document.getElementById('playerName').value = ''; // Reset campo
        updatePlayersList();
    }
}

// Aggiorna la lista dei giocatori
function updatePlayersList() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = players.map(player => `<li>${player}</li>`).join('');
}

// Se il narratore è pronto a impostare le opzioni
function setRoles() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    const rolesData = [
        { role: 'Lupo', count: parseInt(document.getElementById('roleLupo').value) },
        { role: 'Contadino', count: parseInt(document.getElementById('roleContadino').value) },
        { role: 'Veggente', count: parseInt(document.getElementById('roleVeggente').value) },
    ];

    roles = {};
    rolesData.forEach(data => {
        roles[data.role] = data.count;
    });

    document.getElementById('narratorOptions').style.display = 'none';
    document.getElementById('playerOptions').style.display = 'block';
    rolesAssigned = true;
}

// Assegna i ruoli casualmente ai giocatori
function assignRoles() {
    if (!rolesAssigned) return;

    const shuffledPlayers = [...players];
    const assignedRoles = [];

    // Assegna i ruoli ai giocatori
    for (const role in roles) {
        for (let i = 0; i < roles[role]; i++) {
            const player = shuffledPlayers.pop();
            assignedRoles.push({ player, role });
        }
    }

    // Mostra il risultato per il narratore
    let resultHtml = '<h2>Ruoli Assegnati</h2><ul>';
    assignedRoles.forEach(item => {
        resultHtml += `<li>${item.player} - ${item.role}</li>`;
    });
    resultHtml += '</ul>';

    document.getElementById('gameResults').innerHTML = resultHtml;
    document.getElementById('gameResults').style.display = 'block';
    document.getElementById('playerOptions').style.display = 'none';
}

// Mostra i risultati per ogni giocatore
function viewRole() {
    if (!rolesAssigned || isNarrator) return;

    const playerName = players[players.length - 1]; // Ultimo giocatore
    const assignedRole = assignRoleToPlayer(playerName);

    alert(`Il tuo ruolo è: ${assignedRole}`);
}

// Assegna un ruolo a un giocatore
function assignRoleToPlayer(player) {
    const assignedRole = assignedRoles.find(item => item.player === player);
    return assignedRole ? assignedRole.role : 'Nessun ruolo assegnato';
}

// Gestione del flusso
function startGame() {
    if (isNarrator) {
        document.getElementById('narratorOptions').style.display = 'block';
        document.getElementById('playerOptions').style.display = 'none';
    } else {
        document.getElementById('playerOptions').style.display = 'block';
        document.getElementById('narratorOptions').style.display = 'none';
    }
}