// Code goes here

(function() {
  var app = angular.module('beerApp', []);

  app.controller('BeerController', function() {
    this.beers = beerList;

  });

  app.controller('RatingController', function() {
    this.ratings = beerList.reviews;

    this.sumOfRatings = {};
    for (int i; i<this.ratings.length; i++)
    {
      this.sumOfRatings += this.ratings[i];
    }
    
  });

  var beerList = [{
    name: 'Pripps Blå',
    description: "För den sletna alkoholkännaren som gillar att visa sig på styva linan!",
    type: "Lager",
    price: 11.90,
    country: 'Sverige',
    reviews: [{
      rating: 5
    }, {
      rating: 3
    }]
  }, {
    name: 'Crocodile Lager',
    description: "Något för den erfarne bänkalkisen!",
    type: "Lager",
    price: 10.90,
    country: 'Sverige',
    reviews: [{
      rating: 1
    }, {
      rating: 4
    }]
  }];

})();
