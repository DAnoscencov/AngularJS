        var app = angular.module('myApp', []);

        app.service('validator', function () {
            this.validate = function (users, email, password) {
                if (email == null || email == '') {
                    return 'Ваше поле почты не должно быть пустым!';
                }
                if (password == null || password == '') {
                    return 'Ваше поле пароля не должно быть пустым!';
                }
                if (users.has(email)) {
                    for (let pair of users.entries()) {
                        if (pair[0] === email && pair[1] === password) {
                            return '';
                        }
                    }
                    return 'Не существует пользователя с такой почтой и паролем!';
                } else
                    return 'Не существует пользователя с такой почтой и паролем!';
            }
        });

        app.service('register', function () {
            this.registrate = function (users, email, password) {
                users.set(email, password);
                return users;
            }
        });


        app.controller('myCtrl', function ($scope, validator, register) {

            var cookie = document.cookie.match(/isLoggedIn=(.+?)(;|$)/)[1];

            if (cookie == 'false') {
                $scope.isLoggedIn = false;
            } else {
                $scope.isLoggedIn = true;
            }

            $scope.users = new Map([
                ['admin', 'admin']
            ]);

            $scope.validation = function (email, password) {
                $scope.validationErrorMessage = validator.validate($scope.users, email, password);
                if ($scope.validationErrorMessage == '') {
                    $scope.isLoggedIn = true;
                    document.getElementById("closeButton").click();
                    document.cookie = "isLoggedIn=true";
                }
            };

            $scope.addUser = function (email, password) {
                if (email == null || email == '') {
                    $scope.successfulOperation = "";
                    $scope.errorMessage = "Ваше поле почты не должно быть пустым!";
                    return;
                }
                if (password == null || password == '') {
                    $scope.successfulOperation = "";
                    $scope.errorMessage = "Ваше поле пароля не должно быть пустым!";
                    return;
                }
                if ($scope.users.has(email)) {
                    $scope.successfulOperation = "";
                    $scope.errorMessage = "Пользователь с такой почтой уже существует!";
                    return;
                }
                $scope.users = register.registrate($scope.users, email, password);
                $scope.errorMessage = "";
                $scope.successfulOperation = "Пользователь успешно зарегестрирован!";
            };

            $scope.clearRegistrationFields = function () {
                $scope.errorMessage = "";
                $scope.successfulOperation = "";
                const inputs = document.querySelectorAll('#regEmail, #regPassword');
                inputs.forEach(input => {
                    input.value = '';
                });
            }

            $scope.clearLoginFields = function () {
                $scope.validationErrorMessage = '';
                const inputs = document.querySelectorAll('#email, #password');
                inputs.forEach(input => {
                    input.value = '';
                });
            }

        });