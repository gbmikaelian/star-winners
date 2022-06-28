import Route from '@ember/routing/route';
import { service } from '@ember/service';
import config from 'star-winners/config/environment';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    const movies = await fetch(`${config.apiURL}/films`).then((v) => v.json());
    const data = [];
    movies.results.map((attributes, key) => {
      data.push({
        id: key,
        type: 'films',
        attributes,
      });
    });

    return this.store.push({ data });
  }
}
