function kiemTra(maTran, dinh, c, color) {
    for (let i = 0; i < maTran.length; i++) {
      if (maTran[dinh][i] === 1 && color[i] === c) {
        return false;
      }
    }
    return true;
}
  
function Try(maTran, m, color, dinh) {
    const N = maTran.length;
    if (dinh === N) {
        return true;
    }
  
    for (let c = 1; c <= m; c++) {
        if (kiemTra(maTran, dinh, c, color)) {
            color[dinh] = c;
            if (Try(maTran, m, color, dinh + 1)) {
                return true;
            }
            color[dinh] = 0; 
            }
        }
        return false;
}
  
function solve(maTran, m) {
    const N = maTran.length;
    const color = Array(N).fill(0);
    if (!Try(maTran, m, color, 0)) {
      console.log("Không có cách tô màu bằng 4 màu!");
    } else {
      console.log("Các màu của các quốc gia:", color);
    }
}
  
const C = [
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
];
  
solve(C, 4);
