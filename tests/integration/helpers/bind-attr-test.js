import { module, test } from 'qunit';
import { setupRenderingTest } from 'star-winners/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | bind-attr', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    this.set('inputValue', 'test-attr');
    this.set('cond', true);

    await render(hbs`{{bind-attr this.inputValue this.cond}}`);

    assert.dom(this.element).hasText('test-attr');
  });
});
