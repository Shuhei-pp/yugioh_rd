function random_show(){
  var cid = calculate_cid();

  const base_url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid="
  var destinate_url =  base_url + cid;
  window.open(destinate_url);
}

function calculate_cid(){
  const cid_min = 4007;  // cidの最小値。
  const cid_max = 16396;  // 2021/6/5時点でのcidの（おそらく）最大値。「LL－比翼の麗鳥」のcid。
  var random_cid = Math.random()*((cid_max+1)-cid_min)+cid_min;
  var random_int_cid = Math.floor(random_cid);
  if(dup_check(random_int_cid)){
    return random_int_cid;
  }
  else{
    return calculate_cid();//除外するカードと重複したらもう一度
  }
}

function dup_check(cid){
  for(i=0;i<=exclude_ids.length;i++){
    if(exclude_ids[i] == cid){
      return false;
    }else{
      return true;
    }
  }
}

// 除外するカードID
let exclude_ids = [
  4995,
  5190,
  5228,
  5466,
  5941,
  6011,
  6017,
  6459,
  6462,
  6552,
  6561,
  6787,
  6826,
  6828,
  6829,
  8890,
  9014,
  9077,
  11674,
  11675,
  15356,
  15599,
  15825,
  15897,
  15898,
  15899,
  15900,
  15901,
  15902,
  15903,
  15904,
  15905,
  15906,
  15907,
  15908,
  15909,
  15910,
  15911,
  15912,
  15913,
  15914,
  15915,
  15916,
  15917,
  15918,
  15919,
  15920,
  15921,
  15922,
  15923,
  15924,
  15925,
  15926,
  15927,
  15928,
  15929,
  15930,
  15931,
  15932,
  15933,
  15934,
  15935,
  15936,
  15937,
  15938,
  15939,
  15940,
  15941,
  15942,
  15943,
  15944,
  15945,
  15946,
  15947,
  15948,
  15949,
  15950,
  15951,
  15952,
  15953,
  15954,
  15955,
  15956,
  15957,
  15958,
  15959,
  15960,
  15961
];