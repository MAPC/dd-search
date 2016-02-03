import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query("development", params);
  },
  actions: {
    toggle: function(direction) {
      $('.ui.sidebar').sidebar('toggle');
    },
    search() {
      this.refresh();
    },
    reset() {
      this.resetController();
    }
  },
  setupController(controller, model, transition) {
    // Call _super for default behavior
    this._super(controller, model);

    this.controllerFor("developments").computeRanges();
    if(transition.queryParams.year !== undefined) {
      var year = JSON.parse(transition.queryParams.year)  
      this.controllerFor('developments').set("yearFrom", year[0]).set("yearTo", year[1]);
    }

    if(transition.queryParams.sqft !== undefined) {
      var sqft = JSON.parse(transition.queryParams.sqft)  
      this.controllerFor('developments').set("sqftFrom", sqft[0]).set("sqftTo", sqft[1]);
    }

    if(transition.queryParams.tothu !== undefined) {
      var tothu = JSON.parse(transition.queryParams.tothu)  
      this.controllerFor('developments').set("tothuFrom", tothu[0]).set("tothuTo", tothu[1]);
    }

  },
  resetController: function () {
    var controller = this.controllerFor("developments")
    var queryParams = controller.get('queryParams');
    queryParams.forEach(function (param) {
      controller.set(param, null);
    });
    controller.rangedProperties.forEach(function(property) { 
      controller.set(property.min, null);
      controller.set(property.max, null);
    });
  }
});
