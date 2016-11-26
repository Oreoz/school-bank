import Ember from 'ember';

export default Ember.Component.extend({
  onDelete: null,
  onEdit: null,

  actions: {
    delete(student) {
      this.get('onDelete')(student);
    },
    edit(student) {
      this.get('onEdit')(student);
    }
  }
});
