function Try(soLuongBiConLai, soLuongHop, cachXep) {
    if (soLuongHop === 1) {
      cachXep.push(soLuongBiConLai);
      console.log(`(${cachXep.join(', ')})`);
      cachXep.pop();
    } else {
      for (let count = 0; count <= soLuongBiConLai; count++) {
        cachXep.push(count);
        Try(soLuongBiConLai - count, soLuongHop - 1, cachXep);
        cachXep.pop();
      }
    }
}
Try(5, 3, []);
  