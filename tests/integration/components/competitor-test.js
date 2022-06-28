import { module, test } from 'qunit';
import { setupRenderingTest } from 'star-winners/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | competitor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const competitor = {
      winner: true,
      title: 'Revenge of the Sith',
      name: 'Anakin Skywalker',
      mass: 1,
    };
    this.set('competitor', competitor);

    await render(hbs`
      <Competitor
        @competitor={{this.competitor}}
        @type='character'
      />
    `);

    assert
      .dom(this.element)
      .includesText(`${competitor.title} ${competitor.name}`);
  });
});
