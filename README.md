# BronKerbosch

An implementation of the [Bron-Kerbosch algorithm](https://en.wikipedia.org/wiki/Bron–Kerbosch_algorithm) to find the maximal cliques in an undirected graph.

---

```sh
npm i @seregpie/bron-kerbosch
```

---

```ts
import runBronKerbosch from '@seregpie/bron-kerbosch';
```

---

```html
<script src="https://unpkg.com/@seregpie/bron-kerbosch"></script>
```


## Usage

```ts
const edges = [[6, 4], [4, 3], [4, 5], [5, 2], [5, 1], [1, 2]];
const cliques = runBronKerbosch(edges);
// => [[4, 6], [4, 3], [4, 5], [2, 5, 1]]
```