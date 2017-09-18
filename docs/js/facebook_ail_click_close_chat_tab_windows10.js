var facebook_ail_click_close_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows10'
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
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 44.440000],
			[Date.UTC(2017, 8, 7), 44.440000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 10), 44.440000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 11), 55.560000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 12), 111.110000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 44.440000],
			[Date.UTC(2017, 8, 12), 66.670000],
			[Date.UTC(2017, 8, 12), 77.780000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 44.440000],
			[Date.UTC(2017, 8, 13), 55.560000],
			[Date.UTC(2017, 8, 13), 66.670000],
			[Date.UTC(2017, 8, 13), 66.670000],
			[Date.UTC(2017, 8, 13), 66.670000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 55.560000],
			[Date.UTC(2017, 8, 14), 55.560000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 15), 55.560000],
			[Date.UTC(2017, 8, 15), 55.560000],
			[Date.UTC(2017, 8, 15), 66.670000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 44.440000],
			[Date.UTC(2017, 8, 18), 55.560000],
			[Date.UTC(2017, 8, 18), 66.670000],
			[Date.UTC(2017, 8, 18), 66.670000],
			[Date.UTC(2017, 8, 18), 66.670000],
			[Date.UTC(2017, 8, 18), 77.780000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 55.560000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 44.440000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 44.440000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 44.440000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 44.440000],
			[Date.UTC(2017, 8, 11), 44.440000],
			[Date.UTC(2017, 8, 11), 55.560000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 44.440000],
			[Date.UTC(2017, 8, 12), 44.440000],
			[Date.UTC(2017, 8, 12), 44.440000],
			[Date.UTC(2017, 8, 12), 55.560000],
			[Date.UTC(2017, 8, 12), 55.560000],
			[Date.UTC(2017, 8, 12), 55.560000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 55.560000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 44.440000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 44.440000],
		]    }]
}