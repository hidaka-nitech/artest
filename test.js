const boxes = document.querySelectorAll('a-box');

boxes.forEach((box) => {
  box.addEventListener('click', function() {
　　　　　// オブジェクトが赤の場合は青、青の場合は赤に変更
    if(this.getAttribute('color') === 'red') {
      this.setAttribute('color', 'blue');
    } else {
      this.setAttribute('color', 'red');
    };  
  });
});
