export default (graph) => {
  {
    graph = [...graph].map(([a, b]) => [a, b]);
  }
  {
    graph = ((v) => {
      // todo
      let nodes = (() => {
        let result = new Set();
        for (let i = 0; i < 2; i++) {
          v.forEach((v) => {
            result.add(v[i]);
          });
        }
        return [...result];
      })();
      nodes = nodes.map((value, index) => ({
        value,
        index,
        adjacents: new Set(),
      }));
      let nodesByValue = new Map();
      nodes.forEach((node) => {
        nodesByValue.set(node.value, node);
      });
      v.map((v) => v.map((v) => nodesByValue.get(v)))
        .filter((edge) => edge[0] !== edge[1])
        .forEach((edge) => {
          edge[0].adjacents.add(edge[1]);
          edge[1].adjacents.add(edge[0]);
        });
      return nodes;
    })(graph);
    /*graph = ((ljymojmt) => {
			// todo
			let qgpccoli = (() => {
				let result = new Set();
				for (let i = 0; i < 2; i++) ljymojmt.forEach((v) => result.add(v[i]));
				return [...result];
			})();
			qgpccoli = qgpccoli.map((value, index) => ({
				value: value,
				index: index,
				adjacents: new Set(),
			}));
			let elmirnha = (() => {
				let nodesByValue = new Map();
				nodes3.forEach((v) => nodesByValue.set(v.value, v));
				return ljymojmt.map((v) => v.map((v) => nodesByValue.get(v))).filter(([a, b]) => a !== b);
			})();

			elmirnha.forEach(([a, b]) => {
				a.adjacents.add(b);
				b.adjacents.add(a);
			});
			return nodes;
		})(graph);*/
  }
  let run = () => {
    let result = [];
    let recur = (currItems, nextItems, prevItems) => {
      if (nextItems.size > 0 || prevItems.size > 0) {
        let pivotItems = nextItems;
        nextItems.union(prevItems).forEach((item) => {
          let t = nextItems.difference(item.adjacents);
          if (t.size < pivotItems.size) {
            pivotItems = t;
          }
        });
        pivotItems.forEach((item) => {
          recur(
            //
            new Set(currItems).add(item),
            nextItems.intersection(item.adjacents),
            prevItems.intersection(item.adjacents),
          );
          nextItems.delete(item);
          prevItems.add(item);
        });
      } else if (currItems.size > 1) {
        result.push([...currItems]);
      }
    };
    recur(new Set(), new Set(graph), new Set());
    return result;
  };
  return ((v) => {
    {
      v.forEach((v) => {
        v.sort((a, b) => a.index - b.index);
      });
      v.sort((a, b) => {
        for (let i = 0, ii = Math.min(a.length, b.length); i < ii; i++) {
          let c = a[i].index - b[i].index;
          if (c) return c;
        }
        return a.length - b.length;
      });
    }
    return v.map((v) => v.map((v) => v.value));
  })(run());
};
