import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  acres: DS.attr("number"),
  name: DS.attr("string"),
  municipality: DS.attr("string"),
  tothu: DS.attr("number"),
  year: DS.attr("number"),
  description: DS.attr("string"),
  walkscore: DS.attr("number")
});
