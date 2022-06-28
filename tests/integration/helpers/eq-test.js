import { module, test } from 'qunit';
import { setupRenderingTest } from 'star-winners/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | eq', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue1', '1234');
    this.set('inputValue2', '1234');
    this.set('inputValue3', '1234');

    await render(
      hbs`{{eq this.inputValue1 this.inputValue2 this.inputValue3}}`
    );
    assert.dom(this.element).hasText('true');
  });
});
