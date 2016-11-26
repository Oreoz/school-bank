import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('student-expanded-row', 'Integration | Component | student expanded row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-expanded-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#student-expanded-row}}
      template block text
    {{/student-expanded-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
