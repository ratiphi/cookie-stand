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
    var eltotalName = document.createElement('p');
    var arrRandHourlySales = [];
    var totalCookies = 0;

    for (var i = 6; i < 12; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour)
      arrRandHourlySales.push('<li>' + i + 'am: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour)
    arrRandHourlySales.push('<li>' + 12 + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
    totalCookies = totalCookies + hourlyCookies;
    for (var i = 1; i < 9; i++) {
      var hourlyCookies = Math.floor(this.randCust() * this.avgPerHour)
      arrRandHourlySales.push('<li>' + i + 'pm: ' + hourlyCookies + ' cookies' + '</li>');
      totalCookies = totalCookies + hourlyCookies;
    }
    var elFullList = arrRandHourlySales.join('');
    elstoreName.innerHTML = this.name;
    elList.innerHTML = elFullList;
    eltotalName.innerHTML = 'Total: ' + totalCookies + ' cookies'
    document.body.appendChild(elstoreName);
    document.body.appendChild(elList);
    document.body.appendChild(eltotalName);
  }
};

firstAndPike.randHourlySales();


var seatacAirport = {
  min: 3,
  max: 24,
  avg: 1.2
};

var seattleCenter = {
  min: 11,
  max: 38,
  avg: 3.7
};

var capitolHill = {
  min: 20,
  max: 38,
  avg: 2.3
};

var alki = {
  min: 2,
  max: 16,
  avg: 4.6
};
