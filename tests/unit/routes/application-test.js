import { module, test } from 'qunit';
import { setupTest } from 'star-winners/tests/helpers';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});