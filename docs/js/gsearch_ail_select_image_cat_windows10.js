var gsearch_ail_select_image_cat_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows10'
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
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 122.220000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 144.440000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 288.890000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 133.330000],
			[Date.UTC(2017, 7, 23), 133.330000],
			[Date.UTC(2017, 7, 23), 166.670000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 155.560000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 25), 466.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 26), 111.110000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 27), 111.110000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 77.780000],
			[Date.UTC(2017, 7, 29), 77.780000],
			[Date.UTC(2017, 7, 29), 77.780000],
			[Date.UTC(2017, 7, 29), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 16), 144.440000],
			[Date.UTC(2017, 7, 16), 144.440000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 255.560000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 300.000000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 288.890000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 166.670000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 266.670000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 188.890000],
			[Date.UTC(2017, 7, 24), 200.000000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 266.670000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 26), 266.670000],
			[Date.UTC(2017, 7, 26), 288.890000],
			[Date.UTC(2017, 7, 26), 322.220000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 27), 255.560000],
			[Date.UTC(2017, 7, 27), 255.560000],
			[Date.UTC(2017, 7, 27), 266.670000],
			[Date.UTC(2017, 7, 27), 266.670000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 166.670000],
			[Date.UTC(2017, 7, 28), 188.890000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 88.890000],
			[Date.UTC(2017, 7, 28), 88.890000],
			[Date.UTC(2017, 7, 29), 133.330000],
			[Date.UTC(2017, 7, 29), 155.560000],
			[Date.UTC(2017, 7, 29), 166.670000],
			[Date.UTC(2017, 7, 29), 633.330000],
			[Date.UTC(2017, 7, 29), 77.780000],
		]    }]
}