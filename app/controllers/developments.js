import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["year", "tothu", "sqft","name","address","municipality","redevelopment","saved", "status"],
  itemActions: ["Complete", "Construction", "Projected", "Planned"],
  year: null,
  tothu: null,
  sqft: null,
  name: null,
  address: null,
  municipality: null,
  redevelopment: null,
  saved: null,
  status: null,
  rangedProperties: [
    {
      name: "year",
      min: "yearFrom",
      max: "yearTo"
    },
    {
      name: "sqft",
      min: "sqftFrom",
      max: "sqftTo"
    },
    {
      name: "tothu",
      min: "tothuFrom",
      max: "tothuTo"
    }
  ],

  actions: {
    update_selected(component, id, value) {
      this.set('status', id);
    }
  },

  toRangeString(min,max) {
    return "[" + min + ',' + max + "]";
  },

  // since a range isn't strictly a type, we need some parsing logic
  computeRanges() {
    this.rangedProperties.forEach((property) => {
      var from = this.get(property.min);
      var to = this.get(property.max);
      if ((from !== undefined || to !== undefined)) {
        this.set(property.name, this.toRangeString(from,to));
      }
      if (from == null || to == null) {
        this.set(property.name, null);
      }
    });
  },

  listenToChanges: function() {
    // this needs to be refactored. No observers.
    console.log("Observer Triggered")
    this.computeRanges();
  }.observes("yearFrom", "yearTo", "sqftTo", "sqftFrom", "tothuFrom", "tothuTo")
});