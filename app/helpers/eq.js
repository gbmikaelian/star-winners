import { helper } from '@ember/component/helper';

export default helper(function eq(condition) {
  return condition.every((v) => v === condition[0]);
});
