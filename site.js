class Tile {
    constructor(flippedClassName) {

        this.DomElement = document.createElement('section');
        this.flippedClassName = flippedClassName;

        this.DomElement.className = 'tile';
        document.getElementById("app").appendChild(this.DomElement);

        this.DomElement.addEventListener('click', () => {
            this.callback();
        });
    }

    callback() {
        console.log('clicked');
        console.log(this.DomElement);
        this.DomElement.classList.add(this.flippedClassName);
    }
}

class GreenTile extends Tile {
    constructor(value) {
        super("green");
        this.value = 1;
    }

    callback() {
        super.callback();
        console.log('Du fik '+ this.value +'  point');
    }
}

class BonusTile extends Tile {
    constructor(value) {
        super("yellow");
        this.value = 10;
    }

    callback() {
        super.callback();
        console.log('Du fik '+ this.value +' point');
    }
}

class DestroyTile extends Tile {
    constructor() {
        super("red");
    }

    callBack(){
        super.callBack();
        console.log('destroyed');
    }
}



// Funktion til at generere tilfældige tiles
function generateTiles() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Rydder containeren for at starte forfra

    const tiles = [];

    // Opret 7 grønne tiles
    for (let i = 0; i < 7; i++) {
        tiles.push(new GreenTile());
    }

    // Opret 1 gult tile
    tiles.push(new BonusTile());

    // Opret 1 rødt tile
    tiles.push(new DestroyTile());

    // Bland rækkefølgen tilfældigt
    shuffleArray(tiles);

    // Tilføj tiles til DOM
    tiles.forEach(tile => app.appendChild(tile.DomElement));
}

// Fisher-Yates shuffle for at randomize tiles
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Kør genereringen ved load
generateTiles();