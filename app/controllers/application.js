import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,
	actions: {
    saveSearch() {
    	this.send("postSearch");
    },
    cancelSearch() {
    	this.send("cancelSaveSearch");
    }
	},
  searches: function() {
    var model = this.get("model.searches")
    console.log(model);
    return model;
  }.property("model.searches")
});
