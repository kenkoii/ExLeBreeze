// script.js

// create the module and name it MyApp
// also include ngRoute for all our routing needs
var MyApp = angular.module('MyApp', ['ngRoute']);

// configure our routes
MyApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the books page
        .when('/books', {
            templateUrl : 'views/books.html',
            controller  : 'booksController'
        })

        // route for the books page
        .when('/books/:bookid', {
            templateUrl : 'views/book.html',
            controller  : 'bookController'
        })

        // route for the authors page
        .when('/authors', {
            templateUrl : 'views/authors.html',
            controller  : 'authorsController'
        })

        // route for the authors page
        .when('/authors/:authorid', {
            templateUrl : 'views/author.html',
            controller  : 'authorController'
        });

    $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
MyApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'A listing of books and authors.';
});

MyApp.controller('booksController', function($scope, $http) {
    $http.get('/api/books')
        .success(function(data) {
            $scope.books = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $scope.message = 'Look! I am an about page.';
});

MyApp.controller('bookController', function($scope, $http, $routeParams) {
    $scope.bookid = $routeParams.bookid;
    $http.get('/api/books/'+$scope.bookid)
        .success(function(data) {
            $scope.book = data;
            console.log(data);
            $http.put('/api/books/'+$scope.bookid,data)
                .success(function(result){
                    console.log(result);
                })
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $scope.message = 'Look! I am an about page.';
});

MyApp.controller('authorsController', function($scope, $http) {
    $http.get('/api/authors')
        .success(function(data) {
            $scope.authors = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $scope.message = 'Contact us! JK. This is just a demo.';
});

MyApp.controller('authorController', function($scope, $http, $routeParams) {
    $scope.authorid = $routeParams.authorid;
    $http.get('/api/authors/'+$scope.authorid)
        .success(function(data) {
            $scope.author = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $scope.message = 'Look! I am an about page.';
});