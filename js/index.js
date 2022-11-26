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
                radius: ['10%', '55%'],
                center: ['50%', '50%'],
                roseType: 'area',
                labelLine: {
                    length: 4,
                    length2: 5,
                },
                itemStyle: {
                    borderRadius: 5
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

// 柱状图
(function () {
    let myEchart = echarts.init(document.getElementsByClassName('bar')[0]);
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }
    let option = {
        xAxis: {
            type: 'category',
            data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            axisLabel: {
                color: '#71f2fb'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#71f2fb'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item',
            // axisPointer: {            // 坐标轴指示器，坐标轴触发有效  这个模块我们此时不需要删掉即可
            // type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        // 直角坐标系内绘图网格（区域）
        grid: {
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        series: [
            {
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240], type: 'bar'
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

// 折线图
(function () {
    let myEchart = echarts.init(document.getElementsByClassName('line_p')[0]);
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    let option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                smooth: true,
                itemStyle: {
                    color: '#00f2f1'
                }
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                smooth: true,
                itemStyle: {
                    color: '#ed3f35'
                }
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
    // 点击切换

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
            var data_ = this.getAttribute('data-time');
            option.series[0].data = data[data_][0];
            option.series[1].data = data[data_][1];
            myEchart.setOption(option);
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
    }

})();
// 雷达图
(function () {
    let myEchart = echarts.init(document.getElementsByClassName('radar')[0]);
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2

    const lineStyle = {
        normal: {
            color: '#fff',
        }
    };
    let option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        radar: {
            center: ['50%', '55%'],
            // 外半径占据容器大小
            radius: '55%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 4,

            axisName: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },

        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                data: [[90, 19, 56, 11, 34]],
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 8
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                }
            },

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
// 水滴图
(function () {
    let myChart = echarts.init(document.getElementsByClassName("qiu")[0]);
    let compositeScore = 0.68;
    let option = {
        graphic: [
            {
                type: "group",
                left: "center",
                top: "62%",
                children: [
                    {
                        type: "text",
                        z: 100,
                        left: "10",
                        top: "middle",
                        style: {
                            fill: "#fff",
                            text: "综合评分",
                            font: "14px PingFangSC-Regular",
                        },
                    },
                ],
            },
        ],
        series: [
            {
                type: "liquidFill", //水位图
                radius: "100%", //显示比例
                center: ["50%", "50%"], //中心点
                data: [compositeScore], // data个数代表波浪数
                color: ["#86daec"], //波浪颜色
                backgroundStyle: {
                    color: {
                        type: "linearGradient",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: "rgba(17,65,86,0.64)",
                            },
                            {
                                offset: 0.51,
                                color: "rgba(32,70,84,0)",
                            },
                            {
                                offset: 0,
                                color: "rgba(99,254,254,0.35)",
                            },
                        ],
                        globalCoord: false,
                    },
                },
                label: {
                    //标签设置
                    position: ["50%", "50%"],
                    formatter: compositeScore * 100 + "%", //显示文本
                    fontSize: "30px",
                    fontFamily: "DINAlternate-Bold",
                    fontWeight: "400",
                    color: "#fff",
                },
                outline: {
                    show: true,
                    borderDistance: 5,
                    itemStyle: {
                        borderColor: "transparent",
                        borderWidth: 1,
                    },
                },
            },
        ],
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();
// 地图
(function () {
    (function () {
        var myChart = echarts.init(document.getElementsByClassName('map_c')[0]);

        var geoCoordMap = {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028]
        };

        var XAData = [
            [{ name: '西安' }, { name: '北京', value: 100 }],
            [{ name: '西安' }, { name: '上海', value: 100 }],
            [{ name: '西安' }, { name: '广州', value: 100 }],
            [{ name: '西安' }, { name: '西宁', value: 100 }],
            [{ name: '西安' }, { name: '银川', value: 100 }]
        ];

        var XNData = [
            [{ name: '西宁' }, { name: '北京', value: 100 }],
            [{ name: '西宁' }, { name: '上海', value: 100 }],
            [{ name: '西宁' }, { name: '广州', value: 100 }],
            [{ name: '西宁' }, { name: '西安', value: 100 }],
            [{ name: '西宁' }, { name: '银川', value: 100 }]
        ];

        var YCData = [
            [{ name: '银川' }, { name: '北京', value: 100 }],
            [{ name: '银川' }, { name: '广州', value: 100 }],
            [{ name: '银川' }, { name: '上海', value: 100 }],
            [{ name: '银川' }, { name: '西安', value: 100 }],
            [{ name: '银川' }, { name: '西宁', value: 100 }],
        ];

        var XMData = [
            [{ name: '厦门' }, { name: '哈尔滨', value: 100 }],
            [{ name: '厦门' }, { name: '呼和浩特', value: 100 }],
            [{ name: '厦门' }, { name: '秦皇岛', value: 100 }],
        ];

        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        //var planePath = 'arrow';
        var convertData = function (data) {

            var res = [];
            for (var i = 0; i < data.length; i++) {

                var dataItem = data[i];

                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[1].value
                    });
                }
            }
            return res;

        };

        var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
        var series = [];
        [['西安', XAData], ['西宁', XNData], ['银川', YCData], ['厦门', XMData]].forEach(function (item, i) {
            series.push({
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: 'red',   //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
                {
                    name: item[0] + ' Top3',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top3',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i],
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params, ticket, callback) {
                    if (params.seriesType == "effectScatter") {
                        return "线路：" + params.data.name + "" + params.data.value[2];
                    } else if (params.seriesType == "lines") {
                        return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                    } else {
                        return params.name;
                    }
                }
            },

            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                zoom: 1.2,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#142957',
                        borderColor: '#195BB9',
                        borderWidth: 1,
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                }
            },
            series: series
        };

        myChart.setOption(option);

        window.addEventListener('load', function () {
            myChart.resize();
        })
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

})();

