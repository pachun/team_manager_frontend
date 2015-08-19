import Ember from 'ember';

export default Ember.ObjectController.extend({
  team_name: '',
  team_city: '',

  actions: {
    createTeam: function() {
      var name_param = this.get('name');
      var city_param = this.get('city');

      var team = this.store.createRecord('team');
      team.set('name', name_param);
      team.set('city', city_param);
      team.set('ticket_price', '100');
      team.save().then(function() {
      }).catch(function() {
      });
    }
  }
});
