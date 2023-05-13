const { describe, it } = require('node:test')
const { deepEqual } = require('assert')
const { parseFirstList, parseSecondList, joinMatchedPairs } = require('../src/match-pairs.js')

describe('parsePairs', function () {
  it('should return an object of the first pair.', function () {
    const file1Content = '79oklw\n381jstc';

    const actual = parseFirstList(file1Content);
    const expected = { oklw: '79oklw', jstc: '381jstc' };

    deepEqual(actual, expected);
  });

  it('should return an object of the second pair.', function () {
    const file2Content = 'jstc331\noklw737';

    const actual = parseSecondList(file2Content);
    const expected = { jstc: '331', oklw: '737' };

    deepEqual(actual, expected);
  });

  it('should join the matching strings together.', function () {
    const table1 = parseFirstList('79oklw\n381jstc');
    const table2 = parseSecondList('jstc331\noklw737\nbdxv211\nusja514');

    const actual = joinMatchedPairs(table1, table2);
    const expected = '79oklw737\n381jstc331';

    deepEqual(actual, expected);
  });
});
