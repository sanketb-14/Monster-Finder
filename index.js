
import {monsters} from './monsters.js';
console.log(monsters);
for(let monsterDiv of monsters){
    showMonster(monsterDiv);

}

function showMonster(monsterDiv){
    const monster = document.createElement('div');
    monster.className = 'monster';
    const img= document.createElement('img');
    img.src = `https://robohash.org/${monsterDiv.id}?set=set2`;
    img.alt = monsterDiv.name ;
    const mname = document.createElement('p');
    mname.className = 'name' ;
    mname.innerText = monsterDiv.name;
    const email = document.createElement('p');
    email.className = 'email'
    email.innerText = monsterDiv.email;
    monster.append(img,mname,email);
    document.querySelector('.monsters').append(monster);
    console.log(monster);
}


function showMonsterNotFound() {
    const notFound= document.createElement('div');
    notFound.className='p-5 not-found';
    // notFound.style.display='none';
    const span = document.createElement('span');
    span.innerText='404';
    const h1 = document.createElement('h1')
    h1.innerText='🧟‍♂️ No Monster Found 🧟‍♂️' ;
    notFound.append(span,h1);
    document.querySelector('.monsters').append(notFound);
    console.log(notFound);


}
showMonsterNotFound()

document.querySelector('#search-monster').addEventListener('keyup', function(e) {
    const keyword= e.target.value.toLowerCase();
    const findMonster = document.querySelectorAll('.monster');
    let notFound = true;


    for(let monster of findMonster){
        const name =monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();
        if(name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block';
            notFound=false;

        }
        else{
            monster.style.display = 'none';
        }
    }
    if(notFound){
        document.querySelector('.not-found').style.display ='block' ;
    }
    else{
        document.querySelector('.not-found').style.display ='none' ;
    }
})

