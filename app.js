var app = new Vue({
  el: "#app",
  data: {
		newItem: '',
		items: []
  },
	methods: {
		addItem: function() {
			if (this.newItem === '') return;
			var item = {
				name: this.newItem,
				isRemoved: false
			}
			this.items.push(item);
			this.newItem = '';
		},
		removeItem: function(index) {
			this.items[index].isRemoved = true;
		},
		clearList: function() {
			this.items = [];
		}
	}
});
