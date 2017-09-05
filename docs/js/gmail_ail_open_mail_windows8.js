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
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 200.000000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 211.110000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 266.670000],
			[Date.UTC(2017, 7, 24), 266.670000],
			[Date.UTC(2017, 7, 25), 200.000000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 222.220000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 222.220000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 288.890000],
			[Date.UTC(2017, 7, 28), 200.000000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 244.440000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 266.670000],
			[Date.UTC(2017, 7, 29), 188.890000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 233.330000],
			[Date.UTC(2017, 7, 29), 244.440000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 188.890000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 255.560000],
			[Date.UTC(2017, 7, 30), 300.000000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 211.110000],
			[Date.UTC(2017, 7, 31), 211.110000],
			[Date.UTC(2017, 7, 31), 222.220000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 222.220000],
			[Date.UTC(2017, 8, 1), 222.220000],
			[Date.UTC(2017, 8, 1), 233.330000],
			[Date.UTC(2017, 8, 1), 233.330000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 2), 166.670000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 222.220000],
			[Date.UTC(2017, 8, 2), 222.220000],
			[Date.UTC(2017, 8, 2), 233.330000],
			[Date.UTC(2017, 8, 2), 233.330000],
			[Date.UTC(2017, 8, 2), 244.440000],
			[Date.UTC(2017, 8, 3), 155.560000],
			[Date.UTC(2017, 8, 3), 188.890000],
			[Date.UTC(2017, 8, 3), 200.000000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 3), 233.330000],
			[Date.UTC(2017, 8, 3), 233.330000],
			[Date.UTC(2017, 8, 4), 166.670000],
			[Date.UTC(2017, 8, 4), 200.000000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 4), 255.560000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 366.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 200.000000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 24), 211.110000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 288.890000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 211.110000],
			[Date.UTC(2017, 7, 26), 222.220000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 244.440000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 29), 177.780000],
			[Date.UTC(2017, 7, 29), 177.780000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 255.560000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 31), 177.780000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 244.440000],
			[Date.UTC(2017, 7, 31), 266.670000],
			[Date.UTC(2017, 8, 1), 188.890000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 1), 244.440000],
			[Date.UTC(2017, 8, 2), 177.780000],
			[Date.UTC(2017, 8, 2), 188.890000],
			[Date.UTC(2017, 8, 2), 188.890000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 200.000000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 3), 177.780000],
			[Date.UTC(2017, 8, 3), 177.780000],
			[Date.UTC(2017, 8, 3), 188.890000],
			[Date.UTC(2017, 8, 3), 188.890000],
			[Date.UTC(2017, 8, 3), 188.890000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 4), 188.890000],
			[Date.UTC(2017, 8, 4), 188.890000],
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 211.110000],
		]    }]
}