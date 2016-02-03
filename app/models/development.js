import DS from 'ember-data';

export default DS.Model.extend({
  acres: DS.attr("number"),
  name: DS.attr("string"),
  municipality: DS.attr("string"),
  x: DS.attr("number"),
  y: DS.attr("number"),
  tothu: DS.attr("number"),
  year: DS.attr("number"),
  description: DS.attr("string"),
  walkscore: DS.attr("number")
});
