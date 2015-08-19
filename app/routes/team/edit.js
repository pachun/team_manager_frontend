import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateTeam: function() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('team')
      }).catch(function() {
      });
    }
  }
});

