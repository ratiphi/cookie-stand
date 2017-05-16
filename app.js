function StoreLocation(name, minCust, maxCust, avgPerHour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerHour = avgPerHour;
}

StoreLocation.prototype.randCust = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

StoreLocation.prototype.randHourlySales = function() {
  var elList = document.createElement('ul');
  var elstoreName = document.createElement('p');
  var arrRandHourlySales = [];
  var totalCookies = 0;

  for (var i = 6; i < 12; i++) {
    var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
  }
  hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
  arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
  totalCookies = totalCookies + hourlyCookies;
  for (i = 1; i < 9; i++) {
    hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
  }
  arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
  var elFullList = arrRandHourlySales.join('');
  elstoreName.innerHTML = this.name;
  elList.innerHTML = elFullList;
  document.body.appendChild(elstoreName);
  document.body.appendChild(elList);
};

StoreLocation.prototype.totalCookies = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

// var firstAndPike = new StoreLocation('1st and Pike', 23, 65, 6.3);


var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerHour: 6.3,
  randCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  randHourlySales: function() {
    var elList = document.createElement('ul');
    var elstoreName = document.createElement('p');
    var arrRandHourlySales = [];
    var totalCookies = 0;

    for (var i = 6; i < 12; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
    for (i = 1; i < 9; i++) {
      hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
    var elFullList = arrRandHourlySales.join('');
    elstoreName.innerHTML = this.name;
    elList.innerHTML = elFullList;
    document.body.appendChild(elstoreName);
    document.body.appendChild(elList);
  }
};

var seatacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerHour: 1.2,
  randCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  randHourlySales: function() {
    var elList = document.createElement('ul');
    var elstoreName = document.createElement('p');
    var arrRandHourlySales = [];
    var totalCookies = 0;

    for (var i = 6; i < 12; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
    for (i = 1; i < 9; i++) {
      hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
    var elFullList = arrRandHourlySales.join('');
    elstoreName.innerHTML = this.name;
    elList.innerHTML = elFullList;
    document.body.appendChild(elstoreName);
    document.body.appendChild(elList);
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerHour: 3.7,
  randCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  randHourlySales: function() {
    var elList = document.createElement('ul');
    var elstoreName = document.createElement('p');
    var arrRandHourlySales = [];
    var totalCookies = 0;

    for (var i = 6; i < 12; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
    for (i = 1; i < 9; i++) {
      hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
    var elFullList = arrRandHourlySales.join('');
    elstoreName.innerHTML = this.name;
    elList.innerHTML = elFullList;
    document.body.appendChild(elstoreName);
    document.body.appendChild(elList);
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerHour: 2.3,
  randCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  randHourlySales: function() {
    var elList = document.createElement('ul');
    var elstoreName = document.createElement('p');
    var arrRandHourlySales = [];
    var totalCookies = 0;

    for (var i = 6; i < 12; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
    for (i = 1; i < 9; i++) {
      hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
    var elFullList = arrRandHourlySales.join('');
    elstoreName.innerHTML = this.name;
    elList.innerHTML = elFullList;
    document.body.appendChild(elstoreName);
    document.body.appendChild(elList);
  }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerHour: 4.6,
  randCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  randHourlySales: function() {
    var elList = document.createElement('ul');
    var elstoreName = document.createElement('p');
    var arrRandHourlySales = [];
    var totalCookies = 0;

    for (var i = 6; i < 12; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
    arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
    for (i = 1; i < 9; i++) {
      hourlyCookies = Math.floor(this.randCust() * this.avgPerHour);
      arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    arrRandHourlySales.push('<li>' + 'Total: ' + totalCookies + ' cookies' + '</li>');
    var elFullList = arrRandHourlySales.join('');
    elstoreName.innerHTML = this.name;
    elList.innerHTML = elFullList;
    document.body.appendChild(elstoreName);
    document.body.appendChild(elList);
  }
};

firstAndPike.randHourlySales();
seatacAirport.randHourlySales();
seattleCenter.randHourlySales();
capitolHill.randHourlySales();
alki.randHourlySales();
