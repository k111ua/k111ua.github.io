halo = echarts.init(document.getElementById('halo'));
line = echarts.init(document.getElementById('line'));

halo.setOption({
    series: [{
        silent: 'true',
        name: '人数',
        type: 'pie',
        radius: ['64', '76'],
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 6800,
            name: '当前任务量',
            itemStyle: {
                color: "#00FFDF",
            },
            label: {
                normal: {
                    formatter: function(params){
                        return 42.5+'%';
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '24',
                        fontWeight: 'bold',
                        color: '#fff',
                        fontFamily: 'helvetica',
                    }
                }
            },
        },{
            value: 16000-6800,//年计划检定减去当前任务量
            itemStyle: {
                color: "rgba(0,0,0,0)",
            }
        }]
    }]
});

line.setOption({
    grid: {
        left: 12,
        right: 12,
        bottom: 12,
        top: 12,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,255,223,0.25)'
            },
            inteval: '0',
        },
        axisLine:{
            lineStyle:{
                color: '#00FFDF'
            }
        },
        axisTick:{
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#00FFDF',
        }
    },
    yAxis: {
        type: 'value',
        max: +4000,
        min: -4000,
        splitNumber: 9,
        splitLine: {
            inteval: 0,
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: 'rgba(0,255,223,0.25)'
            }
        },
        axisLine:{
            lineStyle:{
                color: 'rgba(0,255,223,0.25)'
            }
        },
        axisTick:{
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            
            color: '#00FFDF',
        }
    },
    series: [{
        data: [-820, -1932, -2901, -3034, 1290, 1330, -1320, -901, 1934, 2290, 3330, 1320, -2901, 1934, 1290, 2330, 320, -901, 934, 2490, 3330, 320, 1901, 2934, 1290, 330, 2320,-1901, -2934, 1290,-2300],
        type: 'line',
        symbol:'circle',
        symbolSize:1,
        itemStyle:{
            normal:{
                color:'#00ffdf',
                borderColor:'#00ffdf',
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,255,223,0.30)'
                }, {
                    offset: 1,
                    color: 'rgba(0,255,223,0.05)'
                }])
            }
        },
    }]
});