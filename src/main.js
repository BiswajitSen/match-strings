const fs = require('fs');
const { describe, it } = require('node:test')
const { deepEqual } = require('assert')
const { parseFirstList, parseSecondList, joinMatchedPairs } = require('../src/match-pairs.js')

const main = function () {
  const file1Content = fs.readFileSync('./resources/match_small_1.txt', 'utf-8');
  const file2Content = fs.readFileSync('./resources/match_small_2.txt', 'utf-8');

  const table1 = parseFirstList(file1Content);
  const table2 = parseSecondList(file2Content);

  console.log(joinMatchedPairs(table1, table2), '\n\n');

  const largefile1Content = fs.readFileSync('./resources/match_large_1.txt', 'utf-8');
  const lergefile2Content = fs.readFileSync('./resources/match_large_2.txt', 'utf-8');

  const largetable1 = parseFirstList(largefile1Content);
  const largetable2 = parseSecondList(lergefile2Content);

  console.log(joinMatchedPairs(largetable1, largetable2));
}

main();