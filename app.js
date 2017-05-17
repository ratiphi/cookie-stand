'use strict';

// constructor function to create new store locations
function StoreLocation(name, minCust, maxCust, avgPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  // this method will return a random number between the max and min customer numbers per hour
  this.randCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  };
  // this method will return a random number of sales per hour based on randCust and the average sales per customer
  this.randHourlySales = function() {
    return Math.floor(this.randCust() * this.avgPerCust);
  };
}

// creates a prototype method on StoreLocation that renders the data
StoreLocation.prototype.render = function() {
  var elTable = document.getElementById('tablebody');
  var arrData = [];
  var elNewRow = document.createElement('tr');
  var cookies = 0;
  var totalCookies = 0;
  arrData.push('<td>' + this.name + '</td>');
  // loops through and push 14 random hourly sales to the array
  for (var i = 0; i < 14; i++) {
    cookies = this.randHourlySales();
    totalCookies = totalCookies + cookies;
    arrData.push('<td>' + cookies + '</td>');
  }
  arrData.push('<td>' + totalCookies + '</td>');
  elNewRow.innerHTML = arrData.join('');
  elTable.appendChild(elNewRow);
};

// function to print the header for the table
function printHeader() {
  var elHead = document.getElementById('tablehead');
  var arrData = [];
  var elRow = document.createElement('tr');
  arrData.push('<td></td>');
  // loops through and push the AM hours to the array
  for (var i = 6; i < 12; i++) {
    arrData.push('<td>' + i + ':00am' + '</td>');
  }
  arrData.push('<td>12:00pm</td>');
  // loops through and push the PM hours to the array
  for (var k = 1; k < 8; k++) {
    arrData.push('<td>' + k + ':00pm' + '</td>');
  }
  arrData.push('<td>Daily Location Total</td>');
  elRow.innerHTML = arrData.join('');
  elHead.appendChild(elRow);
}

// function to print the header for the table
function printFooter() {
  var elHead = document.getElementById('tablefoot');
  var arrData = [];
  var elRow = document.createElement('tr');
  arrData.push('<td>Totals</td>');
  // loops through and push the footer cells to the array
  for (var i = 1; i < 16; i++) {
    arrData.push('<td></td>');
  }
  elRow.innerHTML = arrData.join('');
  elHead.appendChild(elRow);
}

// create instances of the StoreLocation object
var firstAndPike = new StoreLocation('1st and Pike', 23, 65, 6.3);
var seatacAirport = new StoreLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3);
var alki = new StoreLocation('Alki', 2, 16, 4.6);

// call functions and methods to print table to HTML
printHeader();
firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
printFooter();









//*************************************************************
// function StoreLocation(name, minCust, maxCust, avgPerCust) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgPerCust = avgPerCust;
//   this.totCookies = 0;
// }
//
// StoreLocation.prototype.randCust = function() {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
// };
//
// StoreLocation.prototype.randHourlySales = function() {
//   var elList = document.createElement('ul');
//   var elstoreName = document.createElement('p');
//   var arrRandHourlySales = [];
//   var totalCookies = 0;
//
//   for (var i = 6; i < 12; i++) {
//     var hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//   }
//   hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//   arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//   totalCookies = totalCookies + hourlyCookies;
//   for (i = 1; i < 9; i++) {
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//   }
//   arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
//   var elFullList = arrRandHourlySales.join('');
//   elstoreName.innerHTML = this.name;
//   elList.innerHTML = elFullList;
//   document.body.appendChild(elstoreName);
//   document.body.appendChild(elList);
//   this.totCookies = totalCookies;
// };
//
// StoreLocation.prototype.totalCookies = function() {
//   return this.totCookies;
// };
//
// // var firstAndPike = new StoreLocation('1st and Pike', 23, 65, 6.3);
//
// var firstAndPike = new StoreLocation('1st and Pike', 23, 65, 6.3);
// var seatacAirport = new StoreLocation('SeaTac Airport', 3, 24, 1.2);
// var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7);
// var capitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3);
// var alki = new StoreLocation('Alki', 2, 16, 4.6);
//
// firstAndPike.randHourlySales();
// seatacAirport.randHourlySales();
// seattleCenter.randHourlySales();
// capitolHill.randHourlySales();
// alki.randHourlySales();




// var firstAndPike = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgPerCust: 6.3,
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   randHourlySales: function() {
//     var elList = document.createElement('ul');
//     var elstoreName = document.createElement('p');
//     var arrRandHourlySales = [];
//     var totalCookies = 0;
//
//     for (var i = 6; i < 12; i++) {
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
//     var elFullList = arrRandHourlySales.join('');
//     elstoreName.innerHTML = this.name;
//     elList.innerHTML = elFullList;
//     document.body.appendChild(elstoreName);
//     document.body.appendChild(elList);
//   }
// };
//
// var seatacAirport = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerCust: 1.2,
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   randHourlySales: function() {
//     var elList = document.createElement('ul');
//     var elstoreName = document.createElement('p');
//     var arrRandHourlySales = [];
//     var totalCookies = 0;
//
//     for (var i = 6; i < 12; i++) {
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
//     var elFullList = arrRandHourlySales.join('');
//     elstoreName.innerHTML = this.name;
//     elList.innerHTML = elFullList;
//     document.body.appendChild(elstoreName);
//     document.body.appendChild(elList);
//   }
// };
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerCust: 3.7,
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   randHourlySales: function() {
//     var elList = document.createElement('ul');
//     var elstoreName = document.createElement('p');
//     var arrRandHourlySales = [];
//     var totalCookies = 0;
//
//     for (var i = 6; i < 12; i++) {
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
//     var elFullList = arrRandHourlySales.join('');
//     elstoreName.innerHTML = this.name;
//     elList.innerHTML = elFullList;
//     document.body.appendChild(elstoreName);
//     document.body.appendChild(elList);
//   }
// };
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerCust: 2.3,
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   randHourlySales: function() {
//     var elList = document.createElement('ul');
//     var elstoreName = document.createElement('p');
//     var arrRandHourlySales = [];
//     var totalCookies = 0;
//
//     for (var i = 6; i < 12; i++) {
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
//     var elFullList = arrRandHourlySales.join('');
//     elstoreName.innerHTML = this.name;
//     elList.innerHTML = elFullList;
//     document.body.appendChild(elstoreName);
//     document.body.appendChild(elList);
//   }
// };
//
// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerCust: 4.6,
//   randCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//   },
//   randHourlySales: function() {
//     var elList = document.createElement('ul');
//     var elstoreName = document.createElement('p');
//     var arrRandHourlySales = [];
//     var totalCookies = 0;
//
//     for (var i = 6; i < 12; i++) {
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerCust);
//       arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
//     var elFullList = arrRandHourlySales.join('');
//     elstoreName.innerHTML = this.name;
//     elList.innerHTML = elFullList;
//     document.body.appendChild(elstoreName);
//     document.body.appendChild(elList);
//   }
// };
