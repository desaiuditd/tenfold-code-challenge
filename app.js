var tenfold = require('./tenfold-code-challenge');

var prevArray = [
  {
    _id: 1,
    someKey: "RINGING",
    meta: {
      subKey1: 1234,
      subKey2: 52
    }
  },
  {
    _id: 2,
    someKey: "TALKING",
    meta: {
      subKey1: 4567,
      subKey4: 10
    }
  }
];

var currArray = [
  {
    _id: 1,
    someKey: "HANGUP",
    meta: {
      subKey1: 1234
    }
  }, {
    _id: 3,
    someKey: "RINGING",
    meta: {
      subKey1: 5678,
      subKey2: 207,
      subKey3: 52
    }
  }
];

console.log(tenfold.arrayDiffToHtmlTable(prevArray, currArray));
