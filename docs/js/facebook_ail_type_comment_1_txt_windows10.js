var facebook_ail_type_comment_1_txt_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_comment_1_txt_windows10'
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
			[Date.UTC(2017, 2, 16), 100.000000],
			[Date.UTC(2017, 2, 16), 11.110000],
			[Date.UTC(2017, 2, 16), 133.330000],
			[Date.UTC(2017, 2, 16), 22.220000],
			[Date.UTC(2017, 2, 16), 22.220000],
			[Date.UTC(2017, 2, 16), 33.330000],
			[Date.UTC(2017, 2, 30), 11.110000],
			[Date.UTC(2017, 2, 30), 22.220000],
			[Date.UTC(2017, 2, 30), 22.220000],
			[Date.UTC(2017, 2, 30), 22.220000],
			[Date.UTC(2017, 2, 30), 55.560000],
			[Date.UTC(2017, 2, 30), 66.670000],
			[Date.UTC(2017, 3, 14), 11.110000],
			[Date.UTC(2017, 3, 14), 11.110000],
			[Date.UTC(2017, 3, 14), 11.110000],
			[Date.UTC(2017, 3, 14), 155.560000],
			[Date.UTC(2017, 3, 14), 166.670000],
			[Date.UTC(2017, 3, 14), 44.440000],
			[Date.UTC(2017, 3, 14), 66.670000],
			[Date.UTC(2017, 3, 14), 77.780000],
			[Date.UTC(2017, 3, 27), 11.110000],
			[Date.UTC(2017, 3, 27), 133.330000],
			[Date.UTC(2017, 3, 27), 144.440000],
			[Date.UTC(2017, 3, 27), 144.440000],
			[Date.UTC(2017, 3, 27), 177.780000],
			[Date.UTC(2017, 3, 27), 33.330000],
			[Date.UTC(2017, 3, 27), 33.330000],
			[Date.UTC(2017, 3, 27), 44.440000],
			[Date.UTC(2017, 4, 11), 100.000000],
			[Date.UTC(2017, 4, 11), 11.110000],
			[Date.UTC(2017, 4, 11), 11.110000],
			[Date.UTC(2017, 4, 11), 166.670000],
			[Date.UTC(2017, 4, 11), 22.220000],
			[Date.UTC(2017, 4, 11), 22.220000],
			[Date.UTC(2017, 4, 11), 300.000000],
			[Date.UTC(2017, 4, 26), 166.670000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 44.440000],
			[Date.UTC(2017, 4, 26), 5.560000],
			[Date.UTC(2017, 4, 26), 5.560000],
			[Date.UTC(2017, 4, 26), 66.670000],
			[Date.UTC(2017, 4, 26), 77.780000],
			[Date.UTC(2017, 5, 1), 11.110000],
			[Date.UTC(2017, 5, 1), 11.110000],
			[Date.UTC(2017, 5, 1), 22.220000],
			[Date.UTC(2017, 5, 1), 22.220000],
			[Date.UTC(2017, 5, 1), 33.330000],
			[Date.UTC(2017, 5, 1), 5.560000],
			[Date.UTC(2017, 5, 1), 66.670000],
			[Date.UTC(2017, 5, 2), 11.110000],
			[Date.UTC(2017, 5, 2), 11.110000],
			[Date.UTC(2017, 5, 2), 11.110000],
			[Date.UTC(2017, 5, 2), 33.330000],
			[Date.UTC(2017, 5, 2), 5.560000],
			[Date.UTC(2017, 5, 2), 66.670000],
			[Date.UTC(2017, 5, 3), 11.110000],
			[Date.UTC(2017, 5, 3), 11.110000],
			[Date.UTC(2017, 5, 3), 111.110000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 5.560000],
			[Date.UTC(2017, 5, 3), 77.780000],
			[Date.UTC(2017, 5, 4), 100.000000],
			[Date.UTC(2017, 5, 4), 100.000000],
			[Date.UTC(2017, 5, 4), 11.110000],
			[Date.UTC(2017, 5, 4), 11.110000],
			[Date.UTC(2017, 5, 4), 11.110000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 6), 100.000000],
			[Date.UTC(2017, 5, 6), 11.110000],
			[Date.UTC(2017, 5, 6), 22.220000],
			[Date.UTC(2017, 5, 6), 22.220000],
			[Date.UTC(2017, 5, 6), 33.330000],
			[Date.UTC(2017, 5, 6), 33.330000],
			[Date.UTC(2017, 5, 6), 66.670000],
			[Date.UTC(2017, 5, 7), 100.000000],
			[Date.UTC(2017, 5, 7), 11.110000],
			[Date.UTC(2017, 5, 7), 11.110000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 66.670000],
			[Date.UTC(2017, 5, 7), 100.000000],
			[Date.UTC(2017, 5, 7), 100.000000],
			[Date.UTC(2017, 5, 7), 11.110000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 55.560000],
			[Date.UTC(2017, 5, 8), 100.000000],
			[Date.UTC(2017, 5, 8), 100.000000],
			[Date.UTC(2017, 5, 8), 11.110000],
			[Date.UTC(2017, 5, 8), 11.110000],
			[Date.UTC(2017, 5, 8), 166.670000],
			[Date.UTC(2017, 5, 8), 22.220000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 9), 11.110000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 55.560000],
			[Date.UTC(2017, 5, 9), 66.670000],
			[Date.UTC(2017, 5, 9), 66.670000],
			[Date.UTC(2017, 5, 9), 66.670000],
			[Date.UTC(2017, 5, 9), 77.780000],
			[Date.UTC(2017, 5, 9), 88.890000],
			[Date.UTC(2017, 5, 11), 166.670000],
			[Date.UTC(2017, 5, 11), 22.220000],
			[Date.UTC(2017, 5, 11), 22.220000],
			[Date.UTC(2017, 5, 11), 22.220000],
			[Date.UTC(2017, 5, 11), 33.330000],
			[Date.UTC(2017, 5, 11), 411.110000],
			[Date.UTC(2017, 5, 11), 66.670000],
			[Date.UTC(2017, 5, 11), 66.670000],
			[Date.UTC(2017, 5, 12), 11.110000],
			[Date.UTC(2017, 5, 12), 11.110000],
			[Date.UTC(2017, 5, 12), 111.110000],
			[Date.UTC(2017, 5, 12), 133.330000],
			[Date.UTC(2017, 5, 12), 22.220000],
			[Date.UTC(2017, 5, 12), 55.560000],
			[Date.UTC(2017, 5, 12), 66.670000],
			[Date.UTC(2017, 5, 12), 11.110000],
			[Date.UTC(2017, 5, 12), 11.110000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 77.780000],
			[Date.UTC(2017, 5, 12), 77.780000],
			[Date.UTC(2017, 5, 14), 100.000000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 55.560000],
			[Date.UTC(2017, 5, 14), 88.890000],
			[Date.UTC(2017, 5, 14), 100.000000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 44.440000],
			[Date.UTC(2017, 5, 14), 55.560000],
			[Date.UTC(2017, 5, 14), 88.890000],
			[Date.UTC(2017, 5, 16), 22.220000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 5.560000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 22.220000],
			[Date.UTC(2017, 5, 16), 22.220000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 55.560000],
			[Date.UTC(2017, 5, 17), 11.110000],
			[Date.UTC(2017, 5, 17), 11.110000],
			[Date.UTC(2017, 5, 17), 11.110000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 5.560000],
			[Date.UTC(2017, 5, 17), 88.890000],
			[Date.UTC(2017, 5, 18), 11.110000],
			[Date.UTC(2017, 5, 18), 11.110000],
			[Date.UTC(2017, 5, 18), 11.110000],
			[Date.UTC(2017, 5, 18), 11.110000],
			[Date.UTC(2017, 5, 18), 11.110000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 66.670000],
			[Date.UTC(2017, 5, 19), 100.000000],
			[Date.UTC(2017, 5, 19), 11.110000],
			[Date.UTC(2017, 5, 19), 111.110000],
			[Date.UTC(2017, 5, 19), 122.220000],
			[Date.UTC(2017, 5, 19), 333.330000],
			[Date.UTC(2017, 5, 19), 66.670000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 88.890000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 66.670000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 233.330000],
			[Date.UTC(2017, 5, 22), 33.330000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 66.670000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 122.220000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 66.670000],
			[Date.UTC(2017, 5, 24), 66.670000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 22.220000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 55.560000],
			[Date.UTC(2017, 5, 25), 77.780000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 66.670000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 88.890000],
			[Date.UTC(2017, 5, 29), 122.220000],
			[Date.UTC(2017, 5, 29), 22.220000],
			[Date.UTC(2017, 5, 29), 22.220000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 30), 11.110000],
			[Date.UTC(2017, 5, 30), 33.330000],
			[Date.UTC(2017, 5, 30), 77.780000],
			[Date.UTC(2017, 6, 1), 11.110000],
			[Date.UTC(2017, 6, 1), 22.220000],
			[Date.UTC(2017, 6, 1), 22.220000],
			[Date.UTC(2017, 6, 1), 277.780000],
			[Date.UTC(2017, 6, 1), 33.330000],
			[Date.UTC(2017, 6, 1), 66.670000],
			[Date.UTC(2017, 6, 2), 11.110000],
			[Date.UTC(2017, 6, 2), 22.220000],
			[Date.UTC(2017, 6, 2), 22.220000],
			[Date.UTC(2017, 6, 2), 22.220000],
			[Date.UTC(2017, 6, 2), 33.330000],
			[Date.UTC(2017, 6, 2), 44.440000],
			[Date.UTC(2017, 6, 2), 44.440000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 4), 111.110000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 5), 100.000000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 22.220000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 55.560000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 22.220000],
			[Date.UTC(2017, 6, 5), 88.890000],
			[Date.UTC(2017, 6, 6), 22.220000],
			[Date.UTC(2017, 6, 6), 22.220000],
			[Date.UTC(2017, 6, 6), 22.220000],
			[Date.UTC(2017, 6, 7), 22.220000],
			[Date.UTC(2017, 6, 7), 100.000000],
			[Date.UTC(2017, 6, 8), 55.560000],
			[Date.UTC(2017, 6, 8), 11.110000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 10), 133.330000],
			[Date.UTC(2017, 6, 10), 166.670000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 33.330000],
			[Date.UTC(2017, 6, 10), 44.440000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 11), 33.330000],
			[Date.UTC(2017, 6, 11), 55.560000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 55.560000],
			[Date.UTC(2017, 6, 13), 11.110000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 15), 155.560000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 15), 77.780000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 77.780000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 44.440000],
			[Date.UTC(2017, 6, 17), 77.780000],
			[Date.UTC(2017, 6, 18), 166.670000],
			[Date.UTC(2017, 6, 18), 22.220000],
			[Date.UTC(2017, 6, 18), 33.330000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 21), 11.110000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 22), 11.110000],
			[Date.UTC(2017, 6, 22), 5.560000],
			[Date.UTC(2017, 6, 23), 11.110000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 11.110000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 26), 11.110000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 11.110000],
			[Date.UTC(2017, 6, 27), 11.110000],
			[Date.UTC(2017, 6, 27), 266.670000],
			[Date.UTC(2017, 6, 27), 33.330000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 31), 66.670000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 200.000000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 66.670000],
			[Date.UTC(2017, 7, 1), 66.670000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 88.890000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 166.670000],
			[Date.UTC(2017, 7, 5), 200.000000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 133.330000],
			[Date.UTC(2017, 7, 6), 266.670000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 77.780000],
			[Date.UTC(2017, 7, 7), 11.110000],
			[Date.UTC(2017, 7, 7), 122.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 77.780000],
			[Date.UTC(2017, 7, 7), 77.780000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 233.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 422.220000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 9), 211.110000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 10), 11.110000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 488.890000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 44.440000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 11.110000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 44.440000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
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
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 5, 12), 5.560000],
			[Date.UTC(2017, 5, 13), 5.560000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 16), 5.560000],
			[Date.UTC(2017, 5, 16), 22.220000],
			[Date.UTC(2017, 5, 16), 22.220000],
			[Date.UTC(2017, 5, 17), 22.220000],
			[Date.UTC(2017, 5, 17), 5.560000],
			[Date.UTC(2017, 5, 18), 11.110000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 5.560000],
			[Date.UTC(2017, 5, 18), 500.000000],
			[Date.UTC(2017, 5, 19), 22.220000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 55.560000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 22.220000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 655.560000],
			[Date.UTC(2017, 5, 29), 11.110000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 30), 22.220000],
			[Date.UTC(2017, 5, 30), 5.560000],
			[Date.UTC(2017, 5, 30), 5.560000],
			[Date.UTC(2017, 6, 1), 11.110000],
			[Date.UTC(2017, 6, 1), 22.220000],
			[Date.UTC(2017, 6, 1), 22.220000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 4), 11.110000],
			[Date.UTC(2017, 6, 4), 11.110000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 22.220000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 6), 22.220000],
			[Date.UTC(2017, 6, 6), 22.220000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 7), 5.560000],
			[Date.UTC(2017, 6, 7), 22.220000],
			[Date.UTC(2017, 6, 8), 11.110000],
			[Date.UTC(2017, 6, 8), 5.560000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 8), 5.560000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 11), 22.220000],
			[Date.UTC(2017, 6, 11), 5.560000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 18), 5.560000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 24), 5.560000],
			[Date.UTC(2017, 6, 26), 5.560000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 11.110000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 5.560000],
			[Date.UTC(2017, 6, 28), 5.560000],
			[Date.UTC(2017, 6, 30), 5.560000],
			[Date.UTC(2017, 7, 1), 11.110000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 7), 11.110000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 9), 22.220000],
			[Date.UTC(2017, 7, 10), 11.110000],
			[Date.UTC(2017, 7, 10), 11.110000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
		]    }]
}