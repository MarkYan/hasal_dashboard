var facebook_ail_type_message_1_txt_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_message_1_txt_windows8'
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Asynchronize Input latency (ms)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ms'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    // Define the data points. All series have a dummy year
    // of 1970/7/1 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
		name: 'firefox',
		data: [
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 44.440000],
			[Date.UTC(2017, 7, 27), 22.220000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 44.440000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 22), 11.110000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 27), 22.220000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
		]    }]
}