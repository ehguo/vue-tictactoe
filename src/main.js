Vue.component('tile', {
  props: ['data'],
  template: `
    <div class="tile">
      {{ data.mark }}
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    tiles: [
      { id: 0, mark: '' },
      { id: 1, mark: '' },
      { id: 2, mark: '' },
      { id: 3, mark: '' },
      { id: 4, mark: '' },
      { id: 5, mark: '' },
      { id: 6, mark: '' },
      { id: 7, mark: '' },
      { id: 8, mark: '' }
    ]
  }
});
