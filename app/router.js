import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('teams', function() {
    this.resource('team.new', { path: 'team/new' })
    this.resource('team', { path: ':id' }, function() {
      this.route('edit', { path: 'edit' });
    });
  });
});

export default Router;

