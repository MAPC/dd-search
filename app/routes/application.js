import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return  this.store.findAll("search");
  },
  actions: {
    toggle: function(direction) {
      console.log("Toggling");
      $('.ui.sidebar').sidebar('toggle');
    },
    transitionToSaved: function(search) {
      var parsed = search.get("parsed");
      this.transitionTo("/developments/search/table?" + parsed);
      this.refresh();
      this.send("toggle");

    },
    nameSearch() {
      $('.ui.modal').modal('show');
    },    
    closeSearchModal() {
      $('.ui.modal').modal('hide');
    },
    postSearch() {
      var controller = this.controllerFor("application");
      var parsed = window.location.href.split("?")[1];
      var search = this.store.createRecord("search", { name: controller.get("name"), parsed: parsed })

      search.save().then((response) => {
        controller.set("name", null);
        this.send("closeSearchModal");
      });
    },
    cancelSaveSearch() {

    }
  }
});
