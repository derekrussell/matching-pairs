const symbols = ["😂", "🤩", "👋", "👑", "🦁", "🦋", "🐠", "🌟"];

class Game {
  constructor() {
    this.board = document.querySelector("[data-board]");
    this.tiles = [];
  }

  init() {
    symbols.forEach(symbol => {
      for (let i = 0; i < 2; i++) this.createTile(symbol);
    })

    this.shuffle();
  }

  createTile(picture) {
    const el = document.createElement("div");
    el.setAttribute("class", "tile");
    el.toggleAttribute("data-tile");
    el.innerText = picture;
    this.tiles.push(el);
  }

  shuffle() {
    let tiles = this.tiles;
    let currentPosition = tiles.length, randomPosition;

    while (currentPosition != 0) {
      randomPosition = Math.floor(Math.random() * currentPosition);
      currentPosition--;
      [tiles[currentPosition], tiles[randomPosition]] = [tiles[randomPosition], tiles[currentPosition]]
    }

    for (let i = 0; i < tiles.length; i++) {
      let tile = this.board.appendChild(tiles[i]);
      new Tile(tile);
    }
  }
}

class Tile {
  constructor(elem, picture) {
    this.tile = elem;
    this.picture = picture;
    this.init();
  }

  init() {
    // this.tile.innerText = this.picture;
    this.tile.addEventListener("click", this.flip);
  }

  flip() {
    this.toggleAttribute("data-flip");
  }
}

let game = new Game();
game.init();
