import Graph from '../src/graph';

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

test('Show Graph', () => {
  const graphs = g.showGraph();

  expect(graphs[0]).toBe('0 ->  1 2');
  expect(graphs[1]).toBe('1 ->  0 3');
  expect(graphs[2]).toBe('2 ->  0 4');
  expect(graphs[3]).toBe('3 ->  1');
  expect(graphs[4]).toBe('4 ->  2');
});

test('Depth First Search', () => {
  const results = g.dfs();

  expect(results[0]).toBe('Visited vertex: 0');
  expect(results[1]).toBe('Visited vertex: 1');
  expect(results[2]).toBe('Visited vertex: 3');
  expect(results[3]).toBe('Visited vertex: 2');
  expect(results[4]).toBe('Visited vertex: 4');
});

test('Breadth First Search', () => {
  const results = g.bfs();
  expect(results[0]).toBe('Visited vertex: 0');
  expect(results[1]).toBe('Visited vertex: 1');
  expect(results[2]).toBe('Visited vertex: 2');
  expect(results[3]).toBe('Visited vertex: 3');
  expect(results[4]).toBe('Visited vertex: 4');
});

test('Shortest path to 4', () => {
  const path = g.pathTo(4);
  expect(path).toBe('4 -> 2 -> 0');
});
