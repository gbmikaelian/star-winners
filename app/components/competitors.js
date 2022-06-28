import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { STARSHIP, CHARACTER, COUNT_OF_CHARACTERS } from '../constants';
import getRndInteger from '../utils/getRndInteger';
import parseLocaleNumber from '../utils/parseLocaleNumber';
import randomNumbers from '../utils/randomNumbers';
import { service } from '@ember/service';

export default class CompetitorsComponent extends Component {
  @service store;
  @tracked competitorsInfo = {
    type: 0,
    competitors: [],
  };

  onRefresh = async () => {
    const films = this.store.peekAll('films');

    const randomFilmsIndexes = [
      getRndInteger(0, films.length),
      getRndInteger(0, films.length),
    ];

    const randomFilms = randomFilmsIndexes.map((v) => films.objectAt(v));

    const competitorsPromise = [];
    const competitorTypeIndex = getRndInteger(0, 2);
    const type = competitorTypeIndex === 1 ? STARSHIP : CHARACTER;

    const uniqueCharacters = {};

    randomFilms.forEach(({ characters, starships, title }) => {
      const competitorsType = [characters, starships][competitorTypeIndex];
      competitorsType.map((v) => (uniqueCharacters[v] = { url: v, title }));
    });

    const competitorsType = Object.values(uniqueCharacters);

    const competitorTypeIndexes = randomNumbers(
      COUNT_OF_CHARACTERS,
      competitorsType.length
    );

    competitorTypeIndexes.map((index) => {
      competitorsPromise.push(() =>
        fetch(competitorsType[index].url).then((v) => v.json())
      );
    });

    const competitors = await Promise.all(
      competitorsPromise.map((promise) => promise())
    );

    competitorTypeIndexes.map((index, key) => {
      competitors[key].title = competitorsType[key].title;
    });

    let energyIsEqual = false;

    let higherEnergy = -Infinity;
    let index;

    competitors.map((v, key) => {
      const localType = type === CHARACTER ? 'mass' : 'crew';
      energyIsEqual = higherEnergy === parseLocaleNumber(v[localType]);
      if (higherEnergy < parseLocaleNumber(v[localType])) {
        higherEnergy = parseLocaleNumber(v[localType]);
        index = key;
      }
    });

    competitors[index].winner = !energyIsEqual;
    this.competitorsInfo = { type, competitors };
  };
}
