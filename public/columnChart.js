var columnChart = function(info, container, nameOfChart , categories){

  var chart = new Highcharts.Chart({
       chart: {
         type: 'column',
         renderTo: container
       },
       title:{
         text: nameOfChart
       },
       series: [info],
       xAxis: {
         categories: categories
       }
  })
}
