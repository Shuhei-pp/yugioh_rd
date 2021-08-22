function random_show(){
  const cid_min = 4007;  // cidの最小値。
  const cid_max = 16396;  // 2021/6/5時点でのcidの（おそらく）最大値。「LL－比翼の麗鳥」のcid。
  var random_cid = Math.random()*((cid_max+1)-cid_min)+cid_min;
  var random_int_cid = Math.floor(random_cid);
  console.log(random_int_cid);
}