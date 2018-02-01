var columnChart = function(cohort17, container, nameOfChart , xAxisTitles){

  var chart = new Highcharts.Chart({
       chart: {
         type: 'column',
         renderTo: container
       },
       title:{
         text: nameOfChart
       },
       series: [cohort17],
       xAxis: {
         categories: xAxisTitles
       }
  })
}
