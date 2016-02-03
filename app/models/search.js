import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr({defaultValue: {}}),
  test: DS.attr("string")
});
