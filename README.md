# BronKerbosch

An implementation of the [Bron-Kerbosch algorithm](https://en.wikipedia.org/wiki/Bron–Kerbosch_algorithm) to find the maximal cliques in an undirected graph.

---

```sh
npm i @seregpie/bron-kerbosch
```

---

```ts
import runBronKerbosch from "@seregpie/bron-kerbosch";
```

---

```html
<script src="https://unpkg.com/@seregpie/bron-kerbosch"></script>
```

## Usage

```ts
const graph = [[1, 4], [2, 3], [2, 5], [3, 5], [4, 5], [4, 6]];
const cliques = runBronKerbosch(graph);
// => [[1, 4], [2, 3, 5], [4, 5], [4, 6]]
```
