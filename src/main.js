Vue.component('tile', {
  props: ['mark'],
  template: `
    <a class="tile">
      {{ mark }}
    </a>
  `
});

new Vue({
  el: '#app',
  data: {
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
  },
  methods: {
    markTile: function (event) {
      const id = event.target.id;
      console.log(id);
      this.tiles[id].mark = 'X';
    }
  }
});
