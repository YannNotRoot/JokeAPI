const API_JOKE = 'https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

// LocalStorage
let blaguesSauvegardees = JSON.parse(localStorage.getItem('blagues') || '[]');
const jokesDejaAffichees = new Set(blaguesSauvegardees.map(b => b.id));

const tbody = document.getElementById('table-joke');

// Affichage blagues stockées
document.addEventListener('DOMContentLoaded', () => {
    blaguesSauvegardees.forEach(blague => affichageTableau(blague));
});

// Récupération blague
async function joke() {
    try {
        const response = await fetch(API_JOKE);
        const blague = await response.json();

        if (blague.error) {
            console.error('Erreur API :', blague.message);
            return;
        }

        if (jokesDejaAffichees.has(blague.id)) {
            console.log('Blague déjà récup');
            return joke();
        }

        enregistrerEtAfficherBlague(blague);
    } catch (error) {
        console.error('Erreur de récupération de la bague :', error);
    }
}

// Sauvegarde et affichage
function enregistrerEtAfficherBlague(blague) {
    jokesDejaAffichees.add(blague.id);
    blaguesSauvegardees.push(blague);
    localStorage.setItem('blagues', JSON.stringify(blaguesSauvegardees));

    affichageTableau(blague);
}

// Gestion affichage
function affichageTableau(blague) {
    if (!tbody) {
        console.error('Élément tbody introuvable');
        return;
    }

    const texteBlague = blague.type === 'single'
        ? blague.joke
        : `${blague.setup} <br> <strong>${blague.delivery}</strong>`;

    const tr = document.createElement('tr');
    tr.dataset.id = blague.id;
    tr.innerHTML = `
        <td>${blague.category}</td>
        <td>${texteBlague}</td>
        <td>
            <button class="btn btn-danger btn-sm btn-delete">Supprimer</button>
        </td>
    `;

    tr.querySelector('.btn-delete').addEventListener('click', () => supprimerBlague(blague.id, tr));

    tbody.appendChild(tr);
}

// Suppression synchronisée
function supprimerBlague(id, elementLigne) {
    elementLigne.remove();

    jokesDejaAffichees.delete(id);

    // Retrait LocalStorage
    blaguesSauvegardees = blaguesSauvegardees.filter(b => b.id !== id);
    localStorage.setItem('blagues', JSON.stringify(blaguesSauvegardees));
}

function clearAllJoke(){
    localStorage.clear()

    blaguesSauvegardees = [];
    jokesDejaAffichees.clear();

    document.getElementById('table-joke').innerHTML = '';
}


document.getElementById('btn-add')?.addEventListener('click', joke);
document.getElementById('btn-clear')?.addEventListener('click', clearAllJoke);