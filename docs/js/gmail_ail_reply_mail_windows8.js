var gmail_ail_reply_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows8'
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
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 1), 255.560000],
			[Date.UTC(2017, 8, 1), 277.780000],
			[Date.UTC(2017, 8, 1), 277.780000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 233.330000],
			[Date.UTC(2017, 8, 2), 244.440000],
			[Date.UTC(2017, 8, 2), 244.440000],
			[Date.UTC(2017, 8, 2), 255.560000],
			[Date.UTC(2017, 8, 2), 255.560000],
			[Date.UTC(2017, 8, 2), 266.670000],
			[Date.UTC(2017, 8, 2), 288.890000],
			[Date.UTC(2017, 8, 2), 300.000000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 3), 233.330000],
			[Date.UTC(2017, 8, 3), 233.330000],
			[Date.UTC(2017, 8, 3), 244.440000],
			[Date.UTC(2017, 8, 3), 244.440000],
			[Date.UTC(2017, 8, 3), 255.560000],
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 244.440000],
			[Date.UTC(2017, 8, 4), 255.560000],
			[Date.UTC(2017, 8, 4), 255.560000],
			[Date.UTC(2017, 8, 4), 266.670000],
			[Date.UTC(2017, 8, 4), 277.780000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 233.330000],
			[Date.UTC(2017, 8, 5), 233.330000],
			[Date.UTC(2017, 8, 5), 255.560000],
			[Date.UTC(2017, 8, 5), 255.560000],
			[Date.UTC(2017, 8, 5), 266.670000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 244.440000],
			[Date.UTC(2017, 8, 7), 211.110000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 244.440000],
			[Date.UTC(2017, 8, 7), 244.440000],
			[Date.UTC(2017, 8, 7), 255.560000],
			[Date.UTC(2017, 8, 7), 255.560000],
			[Date.UTC(2017, 8, 7), 266.670000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 244.440000],
			[Date.UTC(2017, 8, 8), 244.440000],
			[Date.UTC(2017, 8, 8), 244.440000],
			[Date.UTC(2017, 8, 8), 244.440000],
			[Date.UTC(2017, 8, 8), 255.560000],
			[Date.UTC(2017, 8, 8), 255.560000],
			[Date.UTC(2017, 8, 8), 266.670000],
			[Date.UTC(2017, 8, 8), 266.670000],
			[Date.UTC(2017, 8, 9), 244.440000],
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 9), 266.670000],
			[Date.UTC(2017, 8, 9), 266.670000],
			[Date.UTC(2017, 8, 9), 266.670000],
			[Date.UTC(2017, 8, 9), 277.780000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 266.670000],
			[Date.UTC(2017, 8, 10), 277.780000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 244.440000],
			[Date.UTC(2017, 8, 11), 255.560000],
			[Date.UTC(2017, 8, 11), 266.670000],
			[Date.UTC(2017, 8, 11), 266.670000],
			[Date.UTC(2017, 8, 11), 300.000000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 277.780000],
			[Date.UTC(2017, 8, 12), 277.780000],
			[Date.UTC(2017, 8, 12), 277.780000],
			[Date.UTC(2017, 8, 12), 277.780000],
			[Date.UTC(2017, 8, 12), 277.780000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 255.560000],
			[Date.UTC(2017, 8, 13), 255.560000],
			[Date.UTC(2017, 8, 13), 266.670000],
			[Date.UTC(2017, 8, 13), 266.670000],
			[Date.UTC(2017, 8, 14), 266.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 144.440000],
			[Date.UTC(2017, 8, 1), 155.560000],
			[Date.UTC(2017, 8, 1), 166.670000],
			[Date.UTC(2017, 8, 1), 177.780000],
			[Date.UTC(2017, 8, 1), 188.890000],
			[Date.UTC(2017, 8, 2), 122.220000],
			[Date.UTC(2017, 8, 2), 122.220000],
			[Date.UTC(2017, 8, 2), 133.330000],
			[Date.UTC(2017, 8, 2), 144.440000],
			[Date.UTC(2017, 8, 2), 144.440000],
			[Date.UTC(2017, 8, 2), 144.440000],
			[Date.UTC(2017, 8, 2), 144.440000],
			[Date.UTC(2017, 8, 2), 155.560000],
			[Date.UTC(2017, 8, 2), 166.670000],
			[Date.UTC(2017, 8, 2), 177.780000],
			[Date.UTC(2017, 8, 2), 177.780000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 3), 144.440000],
			[Date.UTC(2017, 8, 3), 144.440000],
			[Date.UTC(2017, 8, 3), 155.560000],
			[Date.UTC(2017, 8, 3), 155.560000],
			[Date.UTC(2017, 8, 3), 166.670000],
			[Date.UTC(2017, 8, 3), 177.780000],
			[Date.UTC(2017, 8, 4), 122.220000],
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 188.890000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 133.330000],
			[Date.UTC(2017, 8, 5), 144.440000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 7), 122.220000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 144.440000],
			[Date.UTC(2017, 8, 7), 144.440000],
			[Date.UTC(2017, 8, 7), 144.440000],
			[Date.UTC(2017, 8, 7), 155.560000],
			[Date.UTC(2017, 8, 8), 133.330000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 155.560000],
			[Date.UTC(2017, 8, 8), 155.560000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 166.670000],
			[Date.UTC(2017, 8, 9), 166.670000],
			[Date.UTC(2017, 8, 9), 177.780000],
			[Date.UTC(2017, 8, 9), 177.780000],
			[Date.UTC(2017, 8, 10), 133.330000],
			[Date.UTC(2017, 8, 10), 155.560000],
			[Date.UTC(2017, 8, 10), 166.670000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 11), 144.440000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 177.780000],
			[Date.UTC(2017, 8, 11), 177.780000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 133.330000],
			[Date.UTC(2017, 8, 12), 133.330000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 177.780000],
			[Date.UTC(2017, 8, 12), 177.780000],
			[Date.UTC(2017, 8, 12), 200.000000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 144.440000],
			[Date.UTC(2017, 8, 13), 155.560000],
			[Date.UTC(2017, 8, 13), 155.560000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 177.780000],
			[Date.UTC(2017, 8, 14), 133.330000],
		]    }]
}