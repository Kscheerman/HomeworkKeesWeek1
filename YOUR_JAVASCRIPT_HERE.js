let hero = {
    name: 'Mislav',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'Axe',
        damage: 2,
    }
}

function displayStats(naam) {
    document.getElementById('stats').innerHTML = "name= " + naam.name + ", " + "health= " + naam.health + ", " + "weapontype= " + naam.weapon.type + ", " + "weapondamage= " + naam.weapon.damage
}

function rest (naam) {
    if (naam.health == 10) {
    alert("Health is already at 10"); 
    }
    naam.health = 10;
    return naam;
}

function pickUpItem (naam, wapen) {
    console.log(naam);
    naam.inventory.push(wapen); 
    }

console.log(hero.health);

function equipWeapon (naam) {
    if (naam.inventory.length == 0) {
        return;
    }
    naam.weapon = naam.inventory[0];
}


const UIInn = document.getElementById('inn');
console.log(UIInn);

UIInn.addEventListener('click', function(event) {
    rest(hero);
    console.log(hero.health);
    displayStats(hero);
});

console.log(hero.health);

const dagger = {type: 'dagger', damage: 2};
const UIDagger = document.getElementById('dagger');
UIDagger.addEventListener('click', function(event2) {
    pickUpItem(hero, dagger);
    console.log(hero.inventory);
    displayStats(hero);
});

const UIBag = document.getElementById('bag');
UIBag.addEventListener('click', function(event) {
    equipWeapon(hero);
    displayStats(hero);
});



displayStats(hero);

