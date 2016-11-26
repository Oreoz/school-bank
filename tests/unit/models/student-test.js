import { moduleForModel, test } from 'ember-qunit';

moduleForModel('student', 'Unit | Model | student', {
  // Specify the other units that are required for this test.
  needs: ['model:coin']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(Boolean(model));
});
