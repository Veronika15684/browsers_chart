import { w } from "./visiologyBrowsers.js";
document.addEventListener("DOMContentLoaded", function () {
    const chart = Highcharts.chart("container", {
        chart: {
            type: "pie",
        },
        title: {
            text: "Распределение рынка браузеров 2021",
        },
        tooltip: {
            pointFormat: "<b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
            enabled: false,
            point: {
                valueSuffix: "%",
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
        },
        series: [
            {
                color: "rgba(102,187,106,1.00)",
                marker: {
                    radius: 0.1,
                    states: {
                        select: {
                            radius: 5,
                        },
                        hover: {
                            radius: 5,
                        },
                    },
                },
                data: w.series[0].data,
            },
        ],
    });
});
