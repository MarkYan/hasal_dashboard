var gmail_ail_open_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_open_mail_windows8'
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
			[Date.UTC(2017, 7, 7), 311.110000],
			[Date.UTC(2017, 7, 7), 244.440000],
			[Date.UTC(2017, 7, 7), 244.440000],
			[Date.UTC(2017, 7, 7), 255.560000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 9), 244.440000],
			[Date.UTC(2017, 7, 9), 388.890000],
			[Date.UTC(2017, 7, 10), 222.220000],
			[Date.UTC(2017, 7, 10), 311.110000],
			[Date.UTC(2017, 7, 11), 211.110000],
			[Date.UTC(2017, 7, 11), 300.000000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 13), 266.670000],
			[Date.UTC(2017, 7, 13), 311.110000],
			[Date.UTC(2017, 7, 13), 322.220000],
			[Date.UTC(2017, 7, 13), 333.330000],
			[Date.UTC(2017, 7, 13), 333.330000],
			[Date.UTC(2017, 7, 13), 366.670000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 255.560000],
			[Date.UTC(2017, 7, 14), 255.560000],
			[Date.UTC(2017, 7, 14), 277.780000],
			[Date.UTC(2017, 7, 14), 288.890000],
			[Date.UTC(2017, 7, 14), 322.220000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 300.000000],
			[Date.UTC(2017, 7, 15), 300.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 277.780000],
			[Date.UTC(2017, 7, 17), 444.440000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 377.780000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 211.110000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 433.330000],
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 177.780000],
			[Date.UTC(2017, 7, 7), 277.780000],
			[Date.UTC(2017, 7, 8), 166.670000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 9), 166.670000],
			[Date.UTC(2017, 7, 9), 177.780000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 277.780000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 13), 155.560000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 188.890000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 300.000000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 188.890000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 266.670000],
			[Date.UTC(2017, 7, 15), 155.560000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 288.890000],
			[Date.UTC(2017, 7, 16), 244.440000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 255.560000],
			[Date.UTC(2017, 7, 17), 277.780000],
			[Date.UTC(2017, 7, 17), 288.890000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 388.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 288.890000],
		]    }]
}