// used in london.html

function listDomElements() {
  var children = document.body.childNodes;
  var i;

  for (i = 0; i <  children.length; i = i + 1) {
    console.log(children[i]);
  }
}

var description = document.getElementById('description');
console.log(description.innerHTML);

var london = {
  name: 'London',
  population: 8308369,
  tallestBuilding: {
     name:  'Shard',
     height: '310m'
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012],
  updatePopulation: function(newPopulation) {
    this.population = newPopulation;
  }
};


function displayPopulation() {
  // Make a new <p></p> for population. This is not attached to the DOM yet.
  var population = document.createElement('p');

  // Make some text content to put into your <p></p>
  var content = document.createTextNode('Population: ' + london.population);

  // Put the text content into the <p></p>.
  population.appendChild(content);

  // Finally the population can be appended to the body, and will become visible in the browser.
  document.body.appendChild(population);
}

window.onload=function () {
  displayPopulation()
  displayTallestBuilding()
  displayNumberOfUniversities()
  displayAverageRent()

}

function displayTallestBuilding() {
  var tallestBuilding = document.createElement('p');
  var content = document.createTextNode('Tallest Building: ' + london.tallestBuilding.name + ' ' + london.tallestBuilding.height);
  tallestBuilding.appendChild(content);
  document.body.appendChild(tallestBuilding);
}

function displayNumberOfUniversities() {
  var numberOfUniversities = document.createElement('p');
  var content = document.createTextNode('Number of Universities: ' + london.numberOfUniversities);
  numberOfUniversities.appendChild(content);
  document.body.appendChild(numberOfUniversities);
}

function displayAverageRent() {
  var averageRent = document.createElement('p');
  var content = document.createTextNode('Average Rent: ' + london.averageRent);
  averageRent.appendChild(content);
  document.body.appendChild(averageRent);
}

function displayDailyTubePassengerJourney() {
  var dailyTubePassengerJourney = document.createElement('p');
  var content = document.createTextNode('Daily tube passenger journey: ' + london.dailyTubePassengerJourney);
  dailyTubePassengerJourney.appendChild(content);
  document.body.appendChild(dailyTubePassengerJourney);
}

function displayOlympics() {
  var olympics = document.createElement('p');
  var content = document.createTextNode('Olympics: ' + london.olympics);
  olympics.appendChild(content);
  document.body.appendChild(olympics);
}

function updatePopulation() {
  london.updatePopulation(10000000)
}




//updatePopulation: function(newPopulation) {
    //this.population = newPopulation;

//ADD call for updatePopulation function
// Create one main function that does the calls
//Modify Javascript file



















