"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var coffeeController_1 = require("../controllers/coffeeController");
var router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/', coffeeController_1.allCoffee);
// GET /coffee/add - render the add coffee item page
router.get('/add', coffeeController_1.addCoffeePage);
// POST /coffee/add - add coffee item to array
router.post('/add', coffeeController_1.addCoffee);
// GET /coffee/edit/:id - render the edit coffee page
router.get('/edit/:id', coffeeController_1.editCoffeePage);
// POST /coffee/edit/:id - render the edit coffee page
router.post('/edit/:id', coffeeController_1.editCoffee);
// POST /coffee/delete/:id - delete coffee item
router.post('/delete/:id', coffeeController_1.deleteCoffee);
// GET /coffee/:id - render the coffee item requested
router.get('/:id', coffeeController_1.oneCoffee);
exports.default = router;
