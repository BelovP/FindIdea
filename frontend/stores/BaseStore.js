class BaseStore {
  subscribed = [];
  update() {
    var state = this.state;
    this.subscribed.forEach(function(subscribe) {
      subscribe(state);
    });
  }
  subscribe(listener) {
    this.subscribed.push(listener);
  }
  unsubscribe(listener) {
    var index = this.subscribed.indexOf(listener);
    if (index != -1) {
      this.subscribed.splice(index, 1);
    }
  }
}

module.exports = BaseStore;
