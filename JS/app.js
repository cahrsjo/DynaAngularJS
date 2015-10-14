// Code goes here

(function() {
  var app = angular.module('beerApp', []);

  app.controller('BeerController', ['$scope', '$log', function($scope, $log) {
    this.beers = beerList;

    for (i=0; i < this.beers.length; i++)
    {
      for (j=0; j < this.beers[i].reviews.length; j++)
      {
        this.beers[i].averageRating += this.beers[i].reviews[j].rating;
      }
      this.beers[i].averageRating = this.beers[i].averageRating/this.beers[i].reviews.length;
    }
  }]);

  app.controller('RatingController', ['$scope', '$log', function($scope, $log) {
    this.beers = beerList;
    
    for (i=0; i < this.beers.length; i++)
    {
      for (j=0; j < this.beers[i].reviews.length; j++)
      {
        this.beers[i].averageRating += this.beers[i].reviews[j].rating;
      }
      this.beers[i].averageRating = this.beers[i].averageRating/this.beers[i].reviews.length;
    }
    
  }]);

  var beerList = [{
    id: 0,
    name: 'Pripps Blå',
    description: "För den sletna alkoholkännaren som gillar att visa sig på styva linan!",
    type: "Lager",
    price: 11.90,
    country: 'Sverige',
    reviews: [{
      rating: 5
    }, {
      rating: 3
    }],
    averageRating: 0
  }, {
    id: 1,
    name: 'Crocodile Lager',
    description: "Något för den erfarne bänkalkisen!",
    type: "Lager",
    price: 10.90,
    country: 'Sverige',
    reviews: [{
      rating: 1
    }, {
      rating: 4
    }, {
      rating: 2
    }],
    averageRating: 0
  }];

})();
