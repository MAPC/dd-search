import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    saveSearch() {
    	this.send("postSearch");
    },
    cancelSearch() {
    	this.send("cancelSaveSearch");
    }
	}
});
