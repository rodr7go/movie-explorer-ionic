angular.module('FilmsModule')

.controller('FilmDetailsController', function($scope, Film){
	var initView = function(){
		$scope.film = Film.build({"Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow","Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.","Language":"English","Country":"USA, UK","Awards":"Won 1 Oscar. Another 40 wins & 134 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg","Metascore":"74","imdbRating":"8.6","imdbVotes":"989,681","imdbID":"tt0816692","Type":"movie","Response":"True"});
	};

	$scope.$on('$ionicView.loaded', function() {
		initView();
	});
});