'use strict';

var greuler = window.greuler;
(function () {
  var options = {
    target: '#hello-world',
    linkDistance: 50,
    height: 500,
    data: {
      nodes: [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10}
      ],
      links: [
        {source: 0, target: 1},
        {source: 1, target: 2},
        {source: 2, target: 3},
        {source: 3, target: 6},
        {source: 6, target: 7},
        {source: 7, target: 10},
        {source: 0, target: 10},
        {source: 8, target: 10},
        {source: 8, target: 9},
        {source: 9, target: 10},
        {source: 5, target: 8},
        {source: 5, target: 7},
        {source: 7, target: 8},
        {source: 5, target: 6},
        {source: 4, target: 5},
        {source: 3, target: 4},
        {source: 1, target: 3},
        {source: 1, target: 6}
      ]
    }
  };

  setInterval(function () {
    //options.data.nodes.push({id: Math.floor(Math.random() * 100) });
    greuler(options);
  }, 1000);
})();