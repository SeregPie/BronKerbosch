# BronKerbosch

Implementation of the [Bron-Kerbosch algorithm](https://en.wikipedia.org/wiki/Bron–Kerbosch_algorithm) to find the maximal cliques in an undirected graph. This algorithm variant uses the pivoting and a modification developed by Tomita.

| argument | description |
| ---: | :--- |
| `edges` | An iterable of the edges to build the graph from. An edge is an array of two nodes. |

Returns the maximal cliques as an array of arrays.

## setup

### npm

```shell
npm install @seregpie/bron-kerbosch
```

### ES module

```javascript
import BronKerbosch from '@seregpie/bron-kerbosch';
```

### Node

```javascript
let BronKerbosch = require('@seregpie/bron-kerbosch');
```

### browser

```html
<script src="https://unpkg.com/@seregpie/bron-kerbosch"></script>
```

The module is globally available as `BronKerbosch`.

## usage

```javascript
let edges = [[6, 4], [4, 3], [4, 5], [5, 2], [5, 1], [1, 2]];
let cliques = BronKerbosch(edges);
// => [[4, 6], [4, 3], [4, 5], [2, 5, 1]]
```

## see also

- [NearestNeighborChain](https://github.com/SeregPie/NearestNeighborChain)
