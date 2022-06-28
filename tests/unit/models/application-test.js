import { module, test } from 'qunit';
import { setupTest } from 'star-winners/tests/helpers';

module('Unit | Model | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('application', {});
    assert.ok(model);
  });
});
