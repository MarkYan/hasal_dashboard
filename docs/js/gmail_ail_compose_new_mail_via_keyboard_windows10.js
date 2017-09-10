var gmail_ail_compose_new_mail_via_keyboard_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows10'
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
			[Date.UTC(2017, 7, 28), 188.890000],
			[Date.UTC(2017, 7, 28), 188.890000],
			[Date.UTC(2017, 7, 28), 200.000000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 29), 188.890000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 233.330000],
			[Date.UTC(2017, 7, 29), 255.560000],
			[Date.UTC(2017, 7, 30), 166.670000],
			[Date.UTC(2017, 7, 30), 166.670000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 188.890000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 31), 166.670000],
			[Date.UTC(2017, 7, 31), 188.890000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 366.670000],
			[Date.UTC(2017, 7, 31), 433.330000],
			[Date.UTC(2017, 8, 1), 177.780000],
			[Date.UTC(2017, 8, 1), 177.780000],
			[Date.UTC(2017, 8, 1), 177.780000],
			[Date.UTC(2017, 8, 1), 188.890000],
			[Date.UTC(2017, 8, 1), 188.890000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 2), 166.670000],
			[Date.UTC(2017, 8, 2), 166.670000],
			[Date.UTC(2017, 8, 2), 188.890000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 233.330000],
			[Date.UTC(2017, 8, 3), 166.670000],
			[Date.UTC(2017, 8, 3), 166.670000],
			[Date.UTC(2017, 8, 3), 188.890000],
			[Date.UTC(2017, 8, 3), 200.000000],
			[Date.UTC(2017, 8, 3), 200.000000],
			[Date.UTC(2017, 8, 3), 200.000000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 200.000000],
			[Date.UTC(2017, 8, 4), 200.000000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 200.000000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 7), 166.670000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 666.670000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 111.110000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 133.330000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 111.110000],
			[Date.UTC(2017, 7, 30), 111.110000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 111.110000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 111.110000],
			[Date.UTC(2017, 8, 3), 111.110000],
			[Date.UTC(2017, 8, 3), 111.110000],
			[Date.UTC(2017, 8, 3), 122.220000],
			[Date.UTC(2017, 8, 3), 122.220000],
			[Date.UTC(2017, 8, 3), 133.330000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 122.220000],
			[Date.UTC(2017, 8, 4), 122.220000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 111.110000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 7), 100.000000],
			[Date.UTC(2017, 8, 7), 100.000000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 122.220000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 122.220000],
			[Date.UTC(2017, 8, 9), 133.330000],
		]    }]
}