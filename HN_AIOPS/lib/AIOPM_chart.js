round = echarts.init(document.getElementById('round'));
line = echarts.init(document.getElementById('line'));

round.setOption({
    series: [{
        silent: 'true',
        name: '故障数量',
        type: 'pie',
        radius: ['60', '100'],
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
            value: 3700,
            itemStyle: {
                color: "#00a691",
                
            }
        },{
            value: 4200,
            itemStyle: {
                color: "rgba(0,166,145,.65)",
            }
        },{
            value: 3100,
            itemStyle: {
                color: "rgba(0,166,145,.30)",
            }
        }]
    }]
});

line.setOption({
    grid: {
        left: 16,
        right: 16,
        bottom: 16,
        top: 24,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        boundaryGap: false,
        splitLine: {
            show: false,
            //inteval: '0',
        },
        axisLine:{
            lineStyle:{
                color: '#fff'
            }
        },
        axisTick:{
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#666',
        }
    },
    yAxis: {
        type: 'value',
        max: 2000,
        min: 0,
        splitLine: {
            //inteval: 0,
            show: false,
        },
        axisLine:{
            lineStyle:{
                color: '#fff'
            }
        },
        axisTick:{
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#666',
        }
    },
    series: [{
        data: [820, 1532, 901, 1204, 1290, 730, 520, 901, 1022, 290, 1330, 920],
        type: 'line',
        symbol:'circle',
        symbolSize:1,
        itemStyle:{
            normal:{
                color:'#00A691',
                borderColor:'#00A691',
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,166,145,0.40)'
                }, {
                    offset: 1,
                    color: 'rgba(0,166,145,0.06)'
                }])
            }
        },
    }]
});