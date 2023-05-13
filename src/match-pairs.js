const parseFirstList = function (list) {
  return list.split('\n').reduce((table, word) => {
    const key = word.slice(-4);
    table[key] = word;
    return table;
  }, {});
};

const parseSecondList = function (list) {
  return list.split('\n').reduce((table, word) => {
    const key = word.slice(0, 4);
    table[key] = word.slice(4);
    return table;
  }, {});
};

const joinMatchedPairs = function (table1, table2) {
  return Object.keys(table1).reduce((joinedList, curr) => {
    joinedList.push(table1[curr] + (table2[curr]));
    return joinedList;
  }, []).join('\n');
};

exports.parseFirstList = parseFirstList;
exports.parseSecondList = parseSecondList;
exports.joinMatchedPairs = joinMatchedPairs;
