import RESTAdapter from '@ember-data/adapter/rest';
import config from 'star-winners/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = config.apiURL;
}
