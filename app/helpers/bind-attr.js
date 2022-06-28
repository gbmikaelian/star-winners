import { helper } from '@ember/component/helper';

export default helper(function bindAttr([attr, condition]) {
  return condition ? attr : '';
});
