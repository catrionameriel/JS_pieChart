var app = function(){
  new pieChart();

  var container = document.querySelector('#column-chart')
  var url = 'https://restcountries.eu/rest/v2';
  makeRequest(url, requestComplete);

  // var cohort17 = {
  //   name: 'Cohort 17',
  //   data: [8, 12, 3, 1]
  // };
  //
  // var cohort18 = {
  //   name: 'Cohort 18',
  //   data: [6, 10, 5, 3],
  //   color: 'tomato'
  // };
  //
  // var nameOfChart = 'Our Favourite Programming Language';
  // var xAxisTitles = ['JS', 'Java', 'Ruby', 'SQL'];

  // new columnChart(cohort17, cohort18, container, nameOfChart, xAxisTitles);

/////countries
}


window.addEventListener('load', app);
