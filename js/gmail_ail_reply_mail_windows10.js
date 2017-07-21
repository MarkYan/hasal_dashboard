var gmail_ail_reply_mail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows10'
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
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 233.330000],
			[Date.UTC(2017, 7, 8), 211.110000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 9), 200.000000],
			[Date.UTC(2017, 7, 9), 211.110000],
			[Date.UTC(2017, 7, 9), 277.780000],
			[Date.UTC(2017, 7, 9), 355.560000],
			[Date.UTC(2017, 7, 9), 366.670000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 244.440000],
			[Date.UTC(2017, 7, 10), 266.670000],
			[Date.UTC(2017, 7, 10), 333.330000],
			[Date.UTC(2017, 7, 10), 400.000000],
			[Date.UTC(2017, 7, 11), 277.780000],
			[Date.UTC(2017, 7, 11), 344.440000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 244.440000],
			[Date.UTC(2017, 7, 13), 255.560000],
			[Date.UTC(2017, 7, 13), 422.220000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 244.440000],
			[Date.UTC(2017, 7, 14), 366.670000],
			[Date.UTC(2017, 7, 14), 377.780000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 344.440000],
			[Date.UTC(2017, 7, 15), 377.780000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 311.110000],
			[Date.UTC(2017, 7, 16), 344.440000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 355.560000],
			[Date.UTC(2017, 7, 17), 366.670000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 355.560000],
			[Date.UTC(2017, 7, 19), 366.670000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 300.000000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 133.330000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 9), 111.110000],
			[Date.UTC(2017, 7, 9), 133.330000],
			[Date.UTC(2017, 7, 9), 133.330000],
			[Date.UTC(2017, 7, 9), 211.110000],
			[Date.UTC(2017, 7, 9), 222.220000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 10), 122.220000],
			[Date.UTC(2017, 7, 10), 122.220000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 222.220000],
			[Date.UTC(2017, 7, 11), 133.330000],
			[Date.UTC(2017, 7, 11), 144.440000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 13), 111.110000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 133.330000],
			[Date.UTC(2017, 7, 14), 133.330000],
			[Date.UTC(2017, 7, 14), 133.330000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 15), 122.220000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 20), 111.110000],
			[Date.UTC(2017, 7, 20), 133.330000],
		]    }]
}