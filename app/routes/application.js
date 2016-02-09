import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var api_key = document.API_KEY;
    return Em.RSVP.hash({
      searches: this.store.find("search", { api_key: api_key }),
      search: this.store.createRecord("search")
    });
    // return this.store.find("search", { api_key: api_key });
  },
  actions: {
    toggle: function(direction) {
      console.log("Toggling");
      $('.ui.sidebar').sidebar('toggle');
    },
    transitionToSaved: function(search) {
      var queryObject = search.get("parsed");
      this.transitionTo("/developments/search/table" + queryObject);
      this.refresh();
      this.send("toggle");

    },
    nameSearch() {
      $('.ui.modal').modal('show');
    }
  }
});
