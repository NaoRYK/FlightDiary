"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.weatherEnum = void 0;
var weatherEnum;
(function (weatherEnum) {
    weatherEnum["Sunny"] = "sunny";
    weatherEnum["Rainy"] = "rainy";
    weatherEnum["Cloudy"] = "cloudy";
    weatherEnum["Windy"] = "windy";
    weatherEnum["Stormy"] = "stormy";
    weatherEnum["Clear"] = "clear";
})(weatherEnum || (exports.weatherEnum = weatherEnum = {}));
var Visibility;
(function (Visibility) {
    Visibility["Excellent"] = "excellent";
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
    Visibility["Bad"] = "bad";
    Visibility["SoBad"] = "so bad";
    Visibility["Zero"] = "zero";
})(Visibility || (exports.Visibility = Visibility = {}));
