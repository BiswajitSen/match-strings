const parseFirstList = function (list) {
  const listInfo = list.trim().split('\n');
  return Object.fromEntries(listInfo.map((x) => [x.slice(-4), x]));
};

const parseSecondList = (list) => list.trim().split('\n');

const joinMatchedPairs = function (table1, table2) {
  return table2.map((word) => table1[word.slice(0, 4)] + word.slice(4));
};

exports.parseFirstList = parseFirstList;
exports.parseSecondList = parseSecondList;
exports.joinMatchedPairs = joinMatchedPairs;