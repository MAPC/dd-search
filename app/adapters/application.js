import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4200/api',
  headers: Ember.computed(function() {
    return {
      "API_KEY": Ember.get(document, "API_KEY")
    };
  }).volatile()
});
