import getRndInteger from './getRndInteger';

const randomNumbers = (length, max) => {
  const mapNumbers = new Map();
  for (let i = 0; i < max; i++) {
    mapNumbers.set(getRndInteger(0, max), i);
  }
  return [...mapNumbers].slice(0, length).map(([v]) => v);
};

export default randomNumbers;
