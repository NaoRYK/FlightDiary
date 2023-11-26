"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Invalid date');
    }
    return dateFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Missing weather data");
    }
    return weatherFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.weatherEnum).includes(param);
};
const parseVisibility = (visiblilityFromRequest) => {
    if (!isString(visiblilityFromRequest) || !isVisibility(visiblilityFromRequest)) {
        throw new Error("Incorrect or missing Visibility");
    }
    return visiblilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
