function floydWarshall(graph) {
    const numVertices = graph.length;
    const dist = [];

    // Khởi tạo ma trận khoảng cách ban đầu
    for (let i = 0; i < numVertices; i++) {
        dist[i] = [];
        for (let j = 0; j < numVertices; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[i][j] === undefined) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    // Thuật toán Floyd-Warshall
    for (let k = 0; k < numVertices; k++) {
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

// Ví dụ sử dụng:
const graph = [
    [0, 3, undefined, 7],
    [8, 0, 2, undefined],
    [5, undefined, 0, 1],
    [2, undefined, undefined, 0]
];

const shortestDistances = floydWarshall(graph);
console.log("Ma trận khoảng cách ngắn nhất:");
console.log(shortestDistances);