// Khởi tạo đồ thị
const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
};

// Hàm BFS
function bfs(start) {
  const visited = new Set(); // Lưu trữ các đỉnh đã được duyệt
  const queue = [start]; // Hàng đợi chứa các đỉnh cần duyệt

  while (queue.length > 0) {
    const current = queue.shift(); // Lấy đỉnh đầu tiên trong hàng đợi
    visited.add(current); // Đánh dấu đỉnh đã được duyệt

    console.log("Đỉnh hiện tại:", current); // In ra đỉnh hiện tại

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

// Chạy BFS từ đỉnh 1
bfs(1);