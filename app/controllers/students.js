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
      student.destroyRecord();
    },
    editStudent(student) {
      this.transitionToRoute('student', student.get('id'));
    }
  }
});
