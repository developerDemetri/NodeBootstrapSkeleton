'use strict';

let validator_tool = {};

validator_tool.checkInput = function(input, type, regex) {
  if (input && (typeof input) === type) {
    if (type === 'string' && !regex.test(input)) {
      return false;
    }
    return true;
  }
  return false;
}

module.exports = validator_tool;
