console.log('Hello World!');

class Graph {
  totalVertices: number;
  adjacencies: number[][];

  constructor(totalVertices: number) {
    this.totalVertices = totalVertices;
    this.adjacencies = [];
    for (let i = 0; i < totalVertices; i++) {
      this.adjacencies[i] = [];
    }
  }

  addEdge = (src: number, dest: number) => {
    this.adjacencies[src].push(dest);
    this.adjacencies[dest].push(src);
  };

  showGraph = () => {
    let results = [];
    for (let i = 0; i < this.totalVertices; i++) {
      let result = `${i} -> `;
      for (let j = 0; j < this.adjacencies[i].length; j++) {
        result += ` ${this.adjacencies[i][j]}`;
      }
      results.push(result);
    }

    return results;
  };

  visited: boolean[] = [];
  dfs = (v = 0, results = []) => {
    results.push(`Visited vertex: ${v}`);
    this.visited[v] = true;

    for (let i = 0; i < this.adjacencies[v].length; i++) {
      var curVertex = this.adjacencies[v][i];
      if (!this.visited[curVertex]) {
        this.dfs(curVertex, results);
      }
    }
    return results;
  };

  edgeTo = [];
  bfs = () => {
    const root = 0;
    this.visited = [];
    let queue = [root];
    let results = [];

    results.push(`Visited vertex: ${root}`);
    this.visited[root] = true;

    while (queue.length > 0) {
      const parVertex = queue.shift();
      for (let i = 0; i < this.adjacencies[parVertex].length; i++) {
        const curVertex = this.adjacencies[parVertex][i];
        if (!this.visited[curVertex]) {
          this.edgeTo[curVertex] = parVertex;
          this.visited[curVertex] = true;
          results.push(`Visited vertex: ${curVertex}`);
          queue.push(curVertex);
        }
      }
    }

    return results;
  };

  pathTo = (v: number) => {
    const source = 0;
    var path = [];
    for (let i = v; i != source; i = this.edgeTo[i]) {
      path.push(i);
    }

    path.push(source);
    return path.join(' -> ');
  };
}

export default Graph;
