import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('searches', { path: '/' }, function() {
  //   this.resource('search', { path: '/searches/:search_id' });
  //   // this.route('new');
  // }); 
  this.resource('developments', function() {
    this.route('map');
    this.route('table');
  });
});

export default Router;
