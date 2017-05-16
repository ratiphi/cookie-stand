function StoreLocation(name, minCust, maxCust, avgPerHour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerHour = avgPerHour;
  this.randCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  };
  this.randHourlySales = function() {
    return Math.floor(this.randCust() * this.avgPerHour);
  };
}

StoreLocation.prototype.render = function() {
  var elTable = document.getElementById('shell');
  var arrData = [];
  var elNewRow = document.createElement('tr');
  arrData.push('<td>' + this.name + '</td>');
  for (var i = 0; i < 14; i++) {
    arrData.push('<td>' + this.randHourlySales() + '</td>');
  }
  //console.log(arrData);
  elNewRow.innerHTML = arrData.join('');
  //console.log(elNewRow);
  elTable.appendChild(elNewRow);
};

var firstAndPike = new StoreLocation('1st and Pike', 23, 65, 6.3);
var seatacAirport = new StoreLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreLocation('Capitol Hill', 20, 38, 2.3);
var alki = new StoreLocation('Alki', 2, 16, 4.6);

var allLocations = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();


//*************************************************************
// function StoreLocation(name, minCust, maxCust, avgPerHour) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgPerHour = avgPerHour;
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
//     var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//     arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//   }
//   hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//   arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//   totalCookies = totalCookies + hourlyCookies;
//   for (i = 1; i < 9; i++) {
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
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
//   avgPerHour: 6.3,
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
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
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
//   avgPerHour: 1.2,
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
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
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
//   avgPerHour: 3.7,
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
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
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
//   avgPerHour: 2.3,
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
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
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
//   avgPerHour: 4.6,
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
//       var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//       arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
//       totalCookies = totalCookies + hourlyCookies;
//     }
//     hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
//     arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
//     totalCookies = totalCookies + hourlyCookies;
//     for (i = 1; i < 9; i++) {
//       hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
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
