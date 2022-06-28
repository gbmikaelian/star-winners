import Model, { attr } from '@ember-data/model';

export default class FilmsModel extends Model {
  @attr title;
  @attr episode_id;
  @attr opening_crawl;
  @attr director;
  @attr producer;
  @attr release_date;
  @attr characters;
  @attr planets;
  @attr starships;
  @attr vehicles;
  @attr species;
  @attr created;
  @attr edited;
  @attr url;
}
