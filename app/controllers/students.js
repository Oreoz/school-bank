import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createStudent() {
      let newPost = this.store.createRecord('student', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      });
      newPost.save();
    }
  }
});
