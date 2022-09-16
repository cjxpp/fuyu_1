window.onload = function () {
  var roll = document.getElementById('roll');
  var fl = document.getElementById('fl');
  var fr = document.getElementById('fr');
  var spot_ul = document.getElementById('spot_ul');
  var focus = document.querySelector('.focus');
  var num = 0;
  var timer;
  for (var i = 0; i < roll.children.length; i++) {
    var li = document.createElement('li');
    spot_ul.appendChild(li);
    spot_ul.children[i].num = i;
    spot_ul.children[0].className = 'current';
    roll.children[0].style.opacity = 1;
    roll.children[0].style.transition = '1s';
    spot_ul.children[i].onclick = function () {
      num = this.num;
      for (var i = 0; i < spot_ul.children.length; i++) {
        spot_ul.children[i].className = '';
        roll.children[i].style.opacity = 0;
      }
      spot_ul.children[num].className = 'current';
      roll.children[num].style.transition = '1s';
      roll.children[num].style.opacity = 1;
    }
  }
  timer = setInterval(function () {
    add()
  }, 3000);
  fr.onclick = function () {
    add()
  }
  fl.onclick = function () {
    lessen()
  }
  focus.onmouseover = function () {
    clearInterval(timer);
    timer = null;
  }
  focus.onmouseout = function () {
    timer = setInterval(function () {
      fr.click()    //手动调用
    }, 4000);
  }
  function add() {
    num++;
    num > roll.children.length - 1 ? num = 0 : num;
    for (var i = 0; i < spot_ul.children.length; i++) {
      spot_ul.children[i].className = '';
      roll.children[i].style.opacity = 0;
    }
    roll.children[0].style.opacity = 1;
    roll.children[0].style.transition = '1s';
    spot_ul.children[num].className = 'current';
    roll.children[num].style.transition = '1s';
    roll.children[num].style.opacity = 1;
  }
  function lessen() {
    num--;
    num < 0 ? num = roll.children.length - 1 : num;
    for (var i = 0; i < spot_ul.children.length; i++) {
      spot_ul.children[i].className = '';
      roll.children[i].style.opacity = 0;
    }
    roll.children[0].style.opacity = 1;
    roll.children[0].style.transition = '1s';
    spot_ul.children[num].className = 'current';
    roll.children[num].style.transition = '1s';
    roll.children[num].style.opacity = 1;
  };
}