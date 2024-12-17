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

let tileGreen = new GreenTile();
let tileBonus = new BonusTile();
let tileDestroy = new DestroyTile();
