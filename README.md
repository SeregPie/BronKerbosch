# BronKerbosch

`BronKerbosch(edges)`

An implementation of the [Bron-Kerbosch algorithm](https://en.wikipedia.org/wiki/Bron–Kerbosch_algorithm) to find the maximal cliques in an undirected graph.

| argument | description |
| ---: | :--- |
| `edges` | An iterable of the edges to build the graph from. An edge is an array of two nodes. |

Returns the maximal cliques as an array of arrays.

## setup

### npm

```shell
npm i @seregpie/bron-kerbosch
```

---

Import inside an ES module.

```javascript
import BronKerbosch from '@seregpie/bron-kerbosch';
```

*or*

Import inside a CommonJS module.

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
