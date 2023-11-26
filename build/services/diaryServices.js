"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map((_a) => {
        var { comment } = _a, diaries = __rest(_a, ["comment"]);
        return diaries;
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== undefined) {
        return entry;
    }
    return undefined;
};
exports.findById = findById;
const addEntry = (newDiaryEntry) => {
    const newEntry = Object.assign({ id: diaries.length + 1 }, newDiaryEntry);
    diaries.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;