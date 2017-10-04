Vue.component('board', {
  props: ['hello'],
  template: `
    <div class="board">
      {{ hello }}
    </div>
  `
});

new Vue({
  el: '#app'
});
