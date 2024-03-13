class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(node1, node2, weight) {
        this.edges.push([node1, node2, weight]);
        this.edges.push([node2, node1, weight]);
    }

    prim(startNode) {
        const visited = new Set();
        const edgesQueue = [...this.edges];
        const MST = [];

        visited.add(startNode);

        while (visited.size < this.nodes.length) {
            let minEdge = null;

            for (const edge of edgesQueue) {
                if ((visited.has(edge[0]) && !visited.has(edge[1])) ||
                    (!visited.has(edge[0]) && visited.has(edge[1]))) {
                    if (!minEdge || edge[2] < minEdge[2]) {
                        minEdge = edge;
                    }
                }
            }

            if (!minEdge) {
                // Graph is not connected
                break;
            }

            const [node1, node2, weight] = minEdge;
            MST.push(minEdge);
            visited.add(node1);
            visited.add(node2);

            // Remove selected edge from the queue
            edgesQueue.splice(edgesQueue.indexOf(minEdge), 1);
        }

        return MST;
    }
}

// Example usage:
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 3);
graph.addEdge("B", "D", 2);
graph.addEdge("C", "D", 5);

const minimumSpanningTree = graph.prim("A");
console.log("Minimum Spanning Tree:", minimumSpanningTree);