//Ham tinh giai thua
function giaithua(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * giaithua(n - 1);
    }
}
//Ham tinh to hop
function tohop(n, k) {
    return giaithua(n) / (giaithua(k) * giaithua(n - k));
}

const soCachChon = tohop(7, 3);

console.log('Số cách chọn: ' + soCachChon);
  