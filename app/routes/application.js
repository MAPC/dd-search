import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    alert(window.API_KEY);
    return this.store.find("search");
  },
  actions: {
    toggle: function(direction) {
      console.log("Toggling");
      $('.ui.sidebar').sidebar('toggle');
    },
    transitionToSaved: function(search) {
      console.log("search: ", search);
      var queryObject = search.get("parsed");
      this.transitionTo("/developments/search/table" + queryObject);
      this.refresh();

    } 
  }
});
