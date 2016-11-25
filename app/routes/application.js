import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn(provider) {
      let session = this.get('session');
      session.open('firebase', { provider: provider }).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
