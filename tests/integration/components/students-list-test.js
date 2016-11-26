import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('students-list', 'Integration | Component | students list', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{students-list}}`);

  assert.equal(this.$('h3').text().trim(), 'Student List');
  assert.equal(this.$('p').text().trim(), 'You don\'t have any students yet, consider adding some!');
});
