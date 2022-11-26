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
var index_ = 0;
for (var i = 0; i < ul_one_lis.length; i++) {
    ul_one_lis[i].setAttribute('index', i);
    ul_one_lis[i].onclick = function () {
        index_ = this.getAttribute('index')
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
let timer;
function time() {
    timer = setInterval(function () {
        index_++;
        if (index_ >= ul_one_lis.length) {
            index_ = 0;
        }
        ul_one_lis[index_].click()
    }, 1500)
}
time()
var day_ = document.getElementsByClassName('day')[0];
day_.onmouseenter = function () {
    clearInterval(timer)
}
day_.onmouseleave = function () {
    time()
}
// 销售额统计

var sales_ul = document.getElementsByClassName('sales')[0].getElementsByTagName('ul')[0];
var sales_lis = sales_ul.getElementsByTagName('li');
var ind = 0;
var timer1;
for (var i = 0; i < sales_lis.length; i++) {
    sales_lis[i].setAttribute('index', i);
    sales_lis[i].onclick = function () {
        ind = this.getAttribute('index');
        for (var j = 0; j < sales_lis.length; j++) {
            sales_lis[j].classList.remove('active');
            sales_lis[ind].classList.add('active')
        }
    }
}
function time1() {
    timer1 = setInterval(function () {
        ind++;
        if (ind >= sales_lis.length) {
            ind = 0;
        }
        sales_lis[ind].click()
    }, 1800)
}
time1()
var sales_ = document.getElementsByClassName('sales')[0];
sales_.onmouseenter = function () {
    clearInterval(timer1)
}
sales_.onmouseleave = function () {
    time1()
};

// 饼状图
(function () {
    let myEchart = echarts.init(document.getElementsByClassName('pie')[0]);
    let option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '点位分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'area',
                labelLine: {
                    length: 4,
                    length2: 5,
                },
                itemStyle: {
                    borderRadius: 7
                },
                label: {
                    fontSize: 8
                },
                roseType: 'radius',
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myEchart.setOption(option);
    window.addEventListener('load', function () {
        myEchart.resize();
    })
    window.addEventListener('resize', function () {
        myEchart.resize();
    })

})();