var amazon_ail_hover_related_product_thumbnail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'amazon_ail_hover_related_product_thumbnail_windows8'
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
			[Date.UTC(2017, 8, 5), 400.000000],
			[Date.UTC(2017, 8, 5), 411.110000],
			[Date.UTC(2017, 8, 5), 433.330000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 477.780000],
			[Date.UTC(2017, 8, 5), 500.000000],
			[Date.UTC(2017, 8, 6), 411.110000],
			[Date.UTC(2017, 8, 6), 422.220000],
			[Date.UTC(2017, 8, 6), 422.220000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 7), 411.110000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 466.670000],
			[Date.UTC(2017, 8, 7), 477.780000],
			[Date.UTC(2017, 8, 8), 411.110000],
			[Date.UTC(2017, 8, 8), 411.110000],
			[Date.UTC(2017, 8, 8), 422.220000],
			[Date.UTC(2017, 8, 8), 422.220000],
			[Date.UTC(2017, 8, 8), 455.560000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 9), 400.000000],
			[Date.UTC(2017, 8, 9), 400.000000],
			[Date.UTC(2017, 8, 9), 411.110000],
			[Date.UTC(2017, 8, 9), 422.220000],
			[Date.UTC(2017, 8, 9), 422.220000],
			[Date.UTC(2017, 8, 9), 433.330000],
			[Date.UTC(2017, 8, 9), 444.440000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 411.110000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 433.330000],
			[Date.UTC(2017, 8, 11), 411.110000],
			[Date.UTC(2017, 8, 11), 411.110000],
			[Date.UTC(2017, 8, 11), 422.220000],
			[Date.UTC(2017, 8, 11), 422.220000],
			[Date.UTC(2017, 8, 11), 433.330000],
			[Date.UTC(2017, 8, 11), 433.330000],
			[Date.UTC(2017, 8, 12), 422.220000],
			[Date.UTC(2017, 8, 12), 433.330000],
			[Date.UTC(2017, 8, 12), 433.330000],
			[Date.UTC(2017, 8, 12), 444.440000],
			[Date.UTC(2017, 8, 12), 455.560000],
			[Date.UTC(2017, 8, 12), 477.780000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 14), 400.000000],
			[Date.UTC(2017, 8, 14), 422.220000],
			[Date.UTC(2017, 8, 14), 433.330000],
			[Date.UTC(2017, 8, 14), 433.330000],
			[Date.UTC(2017, 8, 14), 444.440000],
			[Date.UTC(2017, 8, 14), 466.670000],
			[Date.UTC(2017, 8, 15), 411.110000],
			[Date.UTC(2017, 8, 15), 411.110000],
			[Date.UTC(2017, 8, 15), 411.110000],
			[Date.UTC(2017, 8, 15), 411.110000],
			[Date.UTC(2017, 8, 15), 422.220000],
			[Date.UTC(2017, 8, 15), 422.220000],
			[Date.UTC(2017, 8, 15), 422.220000],
			[Date.UTC(2017, 8, 15), 422.220000],
			[Date.UTC(2017, 8, 15), 433.330000],
			[Date.UTC(2017, 8, 15), 433.330000],
			[Date.UTC(2017, 8, 15), 433.330000],
			[Date.UTC(2017, 8, 15), 433.330000],
			[Date.UTC(2017, 8, 15), 444.440000],
			[Date.UTC(2017, 8, 15), 444.440000],
			[Date.UTC(2017, 8, 15), 444.440000],
			[Date.UTC(2017, 8, 15), 455.560000],
			[Date.UTC(2017, 8, 15), 455.560000],
			[Date.UTC(2017, 8, 15), 466.670000],
			[Date.UTC(2017, 8, 15), 466.670000],
			[Date.UTC(2017, 8, 15), 477.780000],
			[Date.UTC(2017, 8, 15), 477.780000],
			[Date.UTC(2017, 8, 15), 488.890000],
			[Date.UTC(2017, 8, 15), 488.890000],
			[Date.UTC(2017, 8, 15), 500.000000],
			[Date.UTC(2017, 8, 15), 688.890000],
			[Date.UTC(2017, 8, 18), 388.890000],
			[Date.UTC(2017, 8, 18), 388.890000],
			[Date.UTC(2017, 8, 18), 400.000000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 500.000000],
			[Date.UTC(2017, 8, 18), 500.000000],
			[Date.UTC(2017, 8, 18), 633.330000],
			[Date.UTC(2017, 8, 18), 677.780000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 5), 477.780000],
			[Date.UTC(2017, 8, 5), 500.000000],
			[Date.UTC(2017, 8, 5), 511.110000],
			[Date.UTC(2017, 8, 5), 511.110000],
			[Date.UTC(2017, 8, 5), 544.440000],
			[Date.UTC(2017, 8, 5), 544.440000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 444.440000],
			[Date.UTC(2017, 8, 6), 444.440000],
			[Date.UTC(2017, 8, 6), 477.780000],
			[Date.UTC(2017, 8, 6), 500.000000],
			[Date.UTC(2017, 8, 6), 533.330000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 477.780000],
			[Date.UTC(2017, 8, 7), 500.000000],
			[Date.UTC(2017, 8, 7), 511.110000],
			[Date.UTC(2017, 8, 7), 522.220000],
			[Date.UTC(2017, 8, 7), 566.670000],
			[Date.UTC(2017, 8, 7), 577.780000],
			[Date.UTC(2017, 8, 8), 466.670000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 8), 488.890000],
			[Date.UTC(2017, 8, 8), 500.000000],
			[Date.UTC(2017, 8, 8), 511.110000],
			[Date.UTC(2017, 8, 8), 522.220000],
			[Date.UTC(2017, 8, 8), 544.440000],
			[Date.UTC(2017, 8, 8), 544.440000],
			[Date.UTC(2017, 8, 9), 433.330000],
			[Date.UTC(2017, 8, 9), 488.890000],
			[Date.UTC(2017, 8, 9), 500.000000],
			[Date.UTC(2017, 8, 9), 511.110000],
			[Date.UTC(2017, 8, 9), 533.330000],
			[Date.UTC(2017, 8, 9), 544.440000],
			[Date.UTC(2017, 8, 9), 544.440000],
			[Date.UTC(2017, 8, 10), 477.780000],
			[Date.UTC(2017, 8, 10), 511.110000],
			[Date.UTC(2017, 8, 10), 522.220000],
			[Date.UTC(2017, 8, 10), 533.330000],
			[Date.UTC(2017, 8, 10), 555.560000],
			[Date.UTC(2017, 8, 10), 555.560000],
			[Date.UTC(2017, 8, 10), 555.560000],
			[Date.UTC(2017, 8, 11), 500.000000],
			[Date.UTC(2017, 8, 11), 500.000000],
			[Date.UTC(2017, 8, 11), 511.110000],
			[Date.UTC(2017, 8, 11), 522.220000],
			[Date.UTC(2017, 8, 11), 533.330000],
			[Date.UTC(2017, 8, 11), 533.330000],
			[Date.UTC(2017, 8, 11), 533.330000],
			[Date.UTC(2017, 8, 12), 477.780000],
			[Date.UTC(2017, 8, 12), 488.890000],
			[Date.UTC(2017, 8, 12), 500.000000],
			[Date.UTC(2017, 8, 12), 511.110000],
			[Date.UTC(2017, 8, 12), 544.440000],
			[Date.UTC(2017, 8, 12), 555.560000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 588.890000],
			[Date.UTC(2017, 8, 14), 444.440000],
			[Date.UTC(2017, 8, 14), 455.560000],
			[Date.UTC(2017, 8, 14), 511.110000],
			[Date.UTC(2017, 8, 14), 544.440000],
			[Date.UTC(2017, 8, 14), 555.560000],
			[Date.UTC(2017, 8, 14), 588.890000],
			[Date.UTC(2017, 8, 15), 422.220000],
			[Date.UTC(2017, 8, 15), 488.890000],
			[Date.UTC(2017, 8, 15), 488.890000],
			[Date.UTC(2017, 8, 15), 511.110000],
			[Date.UTC(2017, 8, 15), 511.110000],
			[Date.UTC(2017, 8, 15), 533.330000],
			[Date.UTC(2017, 8, 15), 577.780000],
			[Date.UTC(2017, 8, 17), 422.220000],
			[Date.UTC(2017, 8, 17), 433.330000],
			[Date.UTC(2017, 8, 17), 433.330000],
			[Date.UTC(2017, 8, 17), 444.440000],
			[Date.UTC(2017, 8, 17), 488.890000],
			[Date.UTC(2017, 8, 17), 544.440000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 488.890000],
			[Date.UTC(2017, 8, 18), 488.890000],
			[Date.UTC(2017, 8, 18), 488.890000],
			[Date.UTC(2017, 8, 18), 500.000000],
			[Date.UTC(2017, 8, 18), 500.000000],
			[Date.UTC(2017, 8, 18), 511.110000],
			[Date.UTC(2017, 8, 18), 511.110000],
			[Date.UTC(2017, 8, 18), 522.220000],
			[Date.UTC(2017, 8, 18), 522.220000],
			[Date.UTC(2017, 8, 18), 522.220000],
			[Date.UTC(2017, 8, 18), 522.220000],
			[Date.UTC(2017, 8, 18), 522.220000],
			[Date.UTC(2017, 8, 18), 544.440000],
		]    }]
}