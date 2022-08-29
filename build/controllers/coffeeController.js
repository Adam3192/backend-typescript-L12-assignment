"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoffee = exports.editCoffee = exports.editCoffeePage = exports.addCoffee = exports.addCoffeePage = exports.oneCoffee = exports.allCoffee = exports.defaultCoffee = void 0;
var coffee_1 = require("../models/coffee");
var defaultCoffee = function (req, res, next) {
    res.redirect('/coffee');
};
exports.defaultCoffee = defaultCoffee;
var allCoffee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var coffeeList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, coffee_1.Coffee.find()];
            case 1:
                coffeeList = _a.sent();
                res.render('all-coffee', {
                    coffeeList: coffeeList
                });
                return [2 /*return*/];
        }
    });
}); };
exports.allCoffee = allCoffee;
var oneCoffee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var itemName, foundCoffee;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemName = req.params.id;
                return [4 /*yield*/, coffee_1.Coffee.findById(itemName)
                    // if the name was not found, return not found
                ];
            case 1:
                foundCoffee = _a.sent();
                // if the name was not found, return not found
                if (!foundCoffee) {
                    return [2 /*return*/, res.render('error', {
                            message: "This is not the URL you are looking for!"
                        })];
                }
                // render the view with the found coffee item
                res.render('coffee-detail', {
                    foundCoffee: foundCoffee
                });
                return [2 /*return*/];
        }
    });
}); };
exports.oneCoffee = oneCoffee;
var addCoffeePage = function (req, res, next) {
    res.render('add-coffee');
};
exports.addCoffeePage = addCoffeePage;
var addCoffee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newCoffee, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newCoffee = new coffee_1.Coffee({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newCoffee.save()];
            case 2:
                _a.sent();
                res.redirect('/coffee');
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.status(500).send(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addCoffee = addCoffee;
var editCoffeePage = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var itemName, foundCoffee;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemName = req.params.id;
                return [4 /*yield*/, coffee_1.Coffee.findById(itemName)];
            case 1:
                foundCoffee = _a.sent();
                if (!foundCoffee) {
                    return [2 /*return*/, res.render('error', {
                            message: "This is not the URL you are looking for!"
                        })];
                }
                res.render('edit-coffee', {
                    foundCoffee: foundCoffee
                });
                return [2 /*return*/];
        }
    });
}); };
exports.editCoffeePage = editCoffeePage;
var editCoffee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, updatedCoffee, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemId = req.params.id;
                updatedCoffee = new coffee_1.Coffee({
                    _id: itemId,
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price
                });
                return [4 /*yield*/, coffee_1.Coffee.findByIdAndUpdate(itemId, { $set: updatedCoffee })];
            case 1:
                result = _a.sent();
                res.redirect('/coffee');
                return [2 /*return*/];
        }
    });
}); };
exports.editCoffee = editCoffee;
var deleteCoffee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                itemId = req.params.id;
                return [4 /*yield*/, coffee_1.Coffee.findByIdAndDelete(itemId)];
            case 1:
                result = _a.sent();
                res.redirect('/coffee');
                return [2 /*return*/];
        }
    });
}); };
exports.deleteCoffee = deleteCoffee;
