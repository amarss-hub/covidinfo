google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Confirmed Cases', '2020 COVID-19',],
        ['Confirmed Cases', 947],
        ['Death', 7],
        ['Recovered', 112],
        
      ]);

      var options = {
        title: 'Total COVID-19 Cases in Islamabad',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total COVID-19 Cases in Islamabad',
          minValue: 0
        },
        vAxis: {
          title: 'Total Cases'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }





    google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Confirmed Cases', '2020 COVID-19',],
            ['Confirmed Cases', 947],
            ['Death', 7],
            ['Recovered', 112],
        
         
        ]);

        var options = {
          chart: {
            title: 'Total COVID-19 Cases in Islamabad',
            chartArea: {width: '50%'},
            minValue: 0,
          },
          vAxis: {
            title: 'Total Cases'
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }