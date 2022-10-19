var app = angular.module('myApp', []);
app.controller('MyCtrl', function ($scope) {

    $scope.genres = {
        "COM": "Комедия",
        "ROM": "Роман",
        "DET": "Детектив",
        "ADV": "Приключение",
        "TRL": "Триллер",
        "MIS": "Мистика",
        "CUL": "Кулинария",
        "CLS": "Классика",
    };

    $scope.countries = {
        "MD": "Молдова",
        "RU": "Россия",
        "IT": "Италия",
        "US": "США",
        "UK": "Великобритания"
    };

    $scope.books = [{
            name: "Мастер и Маргарита",
            writter: "М. Булгаков",
            genre: $scope.genres.CLS,
            country: $scope.countries.RU,
            feedback: "Великолепная книга, которая оставляет желание прочитать её ещё раз!"
        },
        {
            name: "Оно",
            writter: "С. Кинг",
            genre: $scope.genres.TRL,
            country: $scope.countries.US,
            feedback: "Читаю по 10 страниц в день, так как очень страшно!"
        },
        {
            name: "Гугуцэ и его друзья",
            writter: "С. Вангели",
            genre: $scope.genres.CLS,
            country: $scope.countries.MD,
            feedback: "Детям понравилось, да и мне тоже"
        },
        {
            name: "Гарри Поттер и Узник Азкабана",
            writter: "Д. Роулинг",
            genre: $scope.genres.ADV,
            country: $scope.countries.US,
            feedback: "Лучше, чем в кино"
        },

    ];

    $scope.goToHomePage = function () {
        document.cookie = "isLoggedIn=false";
        window.location.replace('/homePage.html');
    }

    $scope.addCurentBook = function (book) {
        $scope.currentBook = {
            name: book.name,
            writter: book.writter,
            genre: book.genre,
            country: book.country,
            feedback: book.feedback
        };

        $scope.books.push($scope.currentBook);
    };
})

app.directive('nameValidation', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value == 'Плохое слово') {
                    mCtrl.$setValidity('badName', false);
                } else {
                    mCtrl.$setValidity('badName', true);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});