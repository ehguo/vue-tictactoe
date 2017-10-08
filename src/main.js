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
      '-', '-', '-',
      '-', '-', '-',
      '-', '-', '-'
    ]
  },
  methods: {
    markTile: function (event) {
      const id = event.target.id;
      console.log(id);
      this.tiles[id] = 'X';
    }
  }
});
