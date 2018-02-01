var pieChart = function(title, info, container){

   var chart = new Highcharts.Chart({
     chart: {
       type: 'pie',
       renderTo: container
     },
     title: {
       text: title
     },
     series: [{
       data: info
       }]
     }]
   });

}
