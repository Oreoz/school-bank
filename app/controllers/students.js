import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: null,
  lastName: null,

  actions: {
    createStudent() {
      let student = this.store.createRecord('student', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      });

      student.save().then(() => {
        this.set('firstName', null);
        this.set('lastName', null);
      });
    },
    deleteStudent(student) {
      let deletions = student.get('coins').map(function(coin) {
        return coin.destroyRecord();
      });

      Ember.RSVP.all(deletions).then(() => {
        return student.destroyRecord();
      })
      .catch(function(error) {
        console.log(`An error occured while deleting a student: ${error}.`);
      });

    },
    editStudent(student) {
      this.transitionToRoute('student', student.get('id'));
    }
  }
});
