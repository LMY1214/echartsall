// 监控区域切换
let fault1 = document.getElementsByClassName('fault1');
let mp_bottom = document.getElementsByClassName('mp_bottom ');
for (var i = 0; i < fault1.length; i++) {
    fault1[i].setAttribute('index', i);
    fault1[i].onclick = function () {
        var index_ = this.getAttribute('index');
        for (k = 0; k < fault1.length; k++) {
            fault1[k].classList.remove('active');
            fault1[index_].classList.add('active');
        }
        for (var j = 0; j < mp_bottom.length; j++) {
            mp_bottom[j].classList.add('mp_bottomHidden');
            mp_bottom[index_].classList.remove('mp_bottomHidden');
        }
    }
}
// 右侧最上方时间
var ul_one_lis = document.getElementsByClassName('ul_one')[0].children;
var ul_data = document.getElementsByClassName('ul_data');

for (var i = 0; i < ul_one_lis.length; i++) {
    ul_one_lis[i].setAttribute('index', i);
    ul_one_lis[i].onclick = function () {
        var index_ = this.getAttribute('index')
        for (var j = 0; j < ul_one_lis.length; j++) {
            ul_one_lis[j].classList.remove('active');
            ul_one_lis[index_].classList.add('active');
        }
        for (var k = 0; k < ul_data.length; k++) {
            ul_data[k].classList.add('ul_dataHidden')
            ul_data[index_].classList.remove('ul_dataHidden')
        }

    }

}
var ind = 0;
var timer;
function timeFn() {
    timer = setInterval(function () {
        ind++;
        if (ind >= ul_one_lis.length) {
            ind = 0;
        }
        ul_one_lis[ind].click()
    }, 1500)
}
timeFn()
var day = document.getElementsByClassName('day')[0];
day.onmouseenter = function () {
    clearInterval(timer)
}
day.onmouseleave = function () {
    timeFn()
}
