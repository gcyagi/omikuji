(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener( 'click', function() {
    var rdm_num = Math.random(); //Math.random : 0 ~ 0.999... 0を含み 1は含まない

    if (rdm_num < 0.1) {
      this.textContent = '大吉';
    } else if (rdm_num < 0.3) {
      this.textContent = '凶';
    } else {
      this.textContent = '中吉';
    }
/* 配列を使用した例
    var results = ['大吉','中吉','凶','末吉'];
    var number = Math.floor(Math.random() * results.length);
    this.textContent = results[number];
*/
/* ベタ打ち
    if (number === 0){
      this.textContent = '大吉';
    } else if (number === 1) {
      this.textContent = '中吉';
    } else {
      this.textContent = '吉';
    }
*/
//    this.textContent = number;
  });

  btn.addEventListener( 'mousedown', function() {
    this.className = 'pushed';
  });

  btn.addEventListener( 'mouseup', function() {
    this.className = '';
  });
})();
