import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://api.lvh.me:5000'
});
