var makeRequest = function(url, callback){
  var newRequest = new XMLHttpRequest();
  newRequest.open('GET', url);
  newRequest.addEventListener('load', callback);
  newRequest.send();
}

var requestComplete = function(){
  if (this.status !== 200) return;
  var countries = JSON.parse(this.responseText);

  var country1 = countries[randomNumber(0, 249)];
  var country2 = countries[randomNumber(0, 249)];
  var country3 = countries[randomNumber(0, 249)];
  var country4 = countries[randomNumber(0, 249)];

  var usedCountries = [country1, country2, country3, country4];

  getData(usedCountries);
}

var randomNumber = function(min, max){
   return Math.floor(Math.random() * (max - min));
}

var getData = function(usedCountries){
  var names = [];
  var populationObject = {
    name: 'Countries Population',
    data: []
  }

  usedCountries.forEach(function(country){
     var name = country.name;
     var population = country.population;
     names.push(name);
     populationObject['data'].push(population);
  })
  var container = document.querySelector('#column-chart');
  new columnChart(populationObject, container,'Random Population Comparator', names);
}
