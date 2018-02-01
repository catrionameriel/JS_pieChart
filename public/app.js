var app = function(){
  var pieChartContainer = document.querySelector('#pie-chart');
  // new pieChart(title, info, pieChartContainer);

  var columnChartContainer = document.querySelector('#column-chart');
  var url = 'https://restcountries.eu/rest/v2';
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);
