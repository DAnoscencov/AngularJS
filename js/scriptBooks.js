var app = angular.module('myApp', []);

app.controller('countryCtrl', function ($scope) {
    $scope.countries = [{
            "country": "Россия",
            "writter": "М. Булгаков"
        },
        {
            "country": "США",
            "writter": "Д. Роулинг"
        },
        {
            "country": "США",
            "writter": "С. Кинг"
        },
        {
            "country": "Великобритания",
            "writter": "Г. Рамзи"
        },
        {
            "country": "Великобритания",
            "writter": "В. Шекспир"
        },
        {
            "country": "Молдова",
            "writter": "С. Вангели"
        },
        {
            "country": "Италия",
            "writter": "У. Эко"
        },
    ];
});

app.controller('arrCtrl', function ($scope) {
    $scope.sumPrice = 0;
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

    $scope.books = [{
            name: "Грозовой перевал",
            writter: "С. Кинг",
            genre: $scope.genres.MIS,
            price: 18.50,
            selected: false
        },
        {
            name: "Оно",
            writter: "С. Кинг",
            genre: $scope.genres.TRL,
            price: 20.95,
            selected: false
        },
        {
            name: "Сияние",
            writter: "С. Кинг",
            genre: $scope.genres.MIS,
            price: 25.40,
            selected: false
        },
        {
            name: "Мастер и Маргарита",
            writter: "М. Булгаков",
            genre: $scope.genres.CLS,
            price: 28.75,
            selected: false
        },
        {
            name: "Собачье сердце",
            writter: "М. Булгаков",
            genre: $scope.genres.CLS,
            price: 18.55,
            selected: false
        },
        {
            name: "Гугуцэ и его друзья",
            writter: "С. Вангели",
            genre: $scope.genres.CLS,
            price: 14.65,
            selected: false
        },
        {
            name: "Гарри Поттер и Узник Азкабана",
            writter: "Д. Роулинг",
            genre: $scope.genres.ADV,
            price: 45.55,
            selected: false
        },
        {
            name: "Гарри Поттер и Философский камень",
            writter: "Д. Роулинг",
            genre: $scope.genres.ADV,
            price: 40.05,
            selected: false
        },
        {
            name: "Идеальный ужин",
            writter: "Г. Рамзи",
            genre: $scope.genres.CUL,
            price: 20.95,
            selected: false
        },
        {
            name: "Имя розы",
            writter: "У. Эко",
            genre: $scope.genres.ROM,
            price: 19.95,
            selected: false
        },
        {
            name: "Маятник Фуко",
            writter: "У. Эко",
            genre: $scope.genres.ROM,
            price: 17.80,
            selected: false
        },
        {
            name: "Остров накануне",
            writter: "У. Эко",
            genre: $scope.genres.ROM,
            price: 25.70,
            selected: false
        },
        {
            name: "Счастлива по умолчанию",
            writter: "Я. Логвин",
            genre: $scope.genres.ROM,
            price: 10.70,
            selected: false
        },
        {
            name: "Доверься мне",
            writter: "М. Кастен",
            genre: $scope.genres.ROM,
            price: 24.70,
            selected: false
        },
        {
            name: "Приключение Алисы",
            writter: "К. Булычев",
            genre: $scope.genres.ADV,
            price: 40.05,
            selected: false
        },
        {
            name: "Белый Клый",
            writter: "Д. Лондон",
            genre: $scope.genres.ADV,
            price: 25.15,
            selected: false
        },
        {
            name: "Внутри убийцы",
            writter: "М. Омер",
            genre: $scope.genres.TRL,
            price: 24.40,
            selected: false
        },
        {
            name: "Девушка с татуировкой Дракона",
            writter: "С. Ларссон",
            genre: $scope.genres.TRL,
            price: 45.95,
            selected: false
        },
    ];

    $scope.addField = function (field) {
        $scope.currentBook = {
            name: field.name,
            writter: field.writter,
            genre: field.genre,
            price: field.price,
            selected: false
        };
        $scope.books.push($scope.currentBook);
    };

    $scope.deleteField = function (field) {
        for (const x of $scope.books) {
            if (x == field) {
                $scope.books.splice($scope.books.indexOf(x), 1);
            }
        }
        $scope.updateSum();
    }

    $scope.updateSum = function () {
        $scope.sumPrice = 0;
        for (const x of $scope.books) {
            if (x.selected == true) {
                $scope.sumPrice += x.price;
            }
        }

    }

    $scope.sumCalculate = function (field) {
        if (field.selected == false) {
            $scope.sumPrice += field.price;
        } else {
            $scope.sumPrice -= field.price;
        }
    }

    $scope.goToHomePage = function () {
        document.cookie = "isLoggedIn=false";
        window.location.replace('/homePage.html');
    }

})