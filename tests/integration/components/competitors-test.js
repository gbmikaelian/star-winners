import { module, test } from 'qunit';
import { setupRenderingTest } from 'star-winners/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | competitors', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Competitors />
    `);

    assert.dom(this.element).hasText('Play');
  });
});
