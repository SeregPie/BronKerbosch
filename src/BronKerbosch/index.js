export default (graph) => {
  {
    graph = [...graph].map(([a, b]) => ([a, b]));
  }
  {
    graph = ((v) => {
      let nodes = (() => {
        let unique = new Set();
        for (let i = 0; i < 2; i++) {
          v.forEach((v) => {
            unique.add(v[i]);
          });
        }
        return [...unique];
      })().map((value, index) => ({
        _value: value,
        _index: index,
        _adjacents: new Set(),
      }));
      let nodesByValue = new Map();
      nodes.forEach((node) => {
        nodesByValue.set(node._value, node);
      });
      let edges = (v
        .map((v) => v.map((v) => nodesByValue.get(v)))
        .filter(([a, b]) => a !== b)
      );
      edges.forEach(([a, b]) => {
        a._adjacents.add(b);
        b._adjacents.add(a);
      });
      return nodes.filter((node) => node._adjacents.size > 0);
    })(graph);
  }
  let run = () => {
    let cliques = [];
    let recur = (clique, p, x) => {
      if (p.size > 0 || x.size > 0) {
        let u = p;
        p.union(x).forEach((node) => {
          let t = p.difference(node._adjacents);
          if (t.size < u.size) {
            u = t;
          }
        });
        u.forEach((node) => {
          recur(
            [...clique, node],
            p.intersection(node._adjacents),
            x.intersection(node._adjacents),
          );
          p.delete(node);
          x.add(node);
        });
      } else {
        cliques.push(clique);
      }
    };
    if (graph.length > 0) {
      recur([], new Set(graph), new Set());
    }
    return cliques;
  };
  return ((v) => {
    {
      v.forEach((v) => {
        v.sort((a, b) => a._index - b._index);
      });
      v.sort((a, b) => {
        for (let i = 0, ii = Math.min(a.length, b.length); i < ii; i++) {
          let c = a[i]._index - b[i]._index;
          if (c) return c;
        }
        return a.length - b.length;
      });
    }
    return v.map((v) => v.map((v) => v._value));
  })(run());
};
