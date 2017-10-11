Vue.component('tile', {
  props: ['mark'],
  template: `
    <a>{{ mark }}</a>
  `
});

const initialState = () => ({
  currentPlayer: 'X',
  tiles: [
    { id: 0, mark: '-' },
    { id: 1, mark: '-' },
    { id: 2, mark: '-' },
    { id: 3, mark: '-' },
    { id: 4, mark: '-' },
    { id: 5, mark: '-' },
    { id: 6, mark: '-' },
    { id: 7, mark: '-' },
    { id: 8, mark: '-' },
  ]
});

function markTile(event) {
  const id = event.target.id;
  if (this.tiles[id].mark === '-') {
    this.tiles[id].mark = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}

function newGame() {
  Object.assign(this.$data, initialState());
}

new Vue({
  el: '#app',
  data: initialState(),
  methods: {
    markTile,
    newGame
  }
});
