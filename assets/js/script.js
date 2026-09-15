const API_joke = 'https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

document.getElementById('btn-add').addEventListener('click', async () => {
    const response = await fetch(url);
    const blague = await response.json();

    afficherBlague(blague);
});

async function getJoke() {
    try {
        const response = await fetch(API_joke);
        const data = await response.json();

        if (data.error) {
            console.error('Erreur API :', data.message);
            return;
        }

        addJokeToTable(data);
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague :', error);
    }
}

function afficherBlague(blague) {
    const tbody = document.getElementById('table-jokes');

    const texteBlague = blague.type === 'single' 
        ? blague.joke 
        : `${blague.setup} <br> ${blague.delivery}`;

    tbody.innerHTML += `
        <tr>
            <td>${blague.category}</td>
            <td>${texteBlague}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="this.closest('tr').remove()">Supprimer de la blague</button>
            </td>
        </tr>
    `;
}

