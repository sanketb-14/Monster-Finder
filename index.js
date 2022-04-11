import { monsters } from './monsters.js';

const monsterContainer = document.querySelector('.monsters');
const monsterFilter = document.querySelector('#search-monster');

function populateMonsters(content) {
  // Clear out existing content
  monsterContainer.innerHTML = '';
  // Usde showMonster to generate an Array of DOMNodes
  let createMonsters = content.map((el) => showMonster(el));
  // Append the DOMNodes in one DOM transaction
  monsterContainer.append(...createMonsters);
}

function showMonster(monsterDiv) {
  const monster = document.createElement('div');
  monster.className = 'monster';

  const img = document.createElement('img');
  img.src = `https://robohash.org/${monsterDiv.id}?set=set2`;
  img.alt = monsterDiv.name;

  const mname = document.createElement('p');
  mname.className = 'name';
  mname.innerText = monsterDiv.name;

  const email = document.createElement('p');
  email.className = 'email';
  email.innerText = monsterDiv.email;
  monster.append(img, mname, email);

  return monster;
}

function showMonsterNotFound() {
  const notFound = document.createElement('div');
  notFound.className = 'p-5 not-found';
  const span = document.createElement('span');
  span.innerText = '404';
  const h1 = document.createElement('h1');
  h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';
  notFound.append(span, h1);
  return notFound;
}

monsterFilter.addEventListener('input', function (e) {
  if (e.target.value !== '') {
    const keyword = e.target.value.toLowerCase();

    const filtered = monsters.filter((el) => {
      if (el.name.toLowerCase().includes(keyword) || el.email.toLowerCase().includes(keyword)) {
        return true;
      }
    });

    if (filtered.length === 0) {
      monsterContainer.innerHTML = '';
      monsterContainer.append(showMonsterNotFound());
    } else {
      populateMonsters(filtered);
    }
  }
});

populateMonsters(monsters);
