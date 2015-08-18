import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find("team", params.id);
  },

  actions: {
    updateTeam: function() {
      this.get('currentModel').save().then(() => {
        debugger;
      }).catch(function() {
      });
    }
  }
});
