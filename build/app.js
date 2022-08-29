"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var coffeeRoutes_1 = __importDefault(require("./routes/coffeeRoutes"));
var coffeeController_1 = require("./controllers/coffeeController");
var mongoose_1 = __importDefault(require("mongoose"));
var connectionString = 'mongodb://localhost:27017/coffeeDB';
mongoose_1.default.connect(connectionString).then(function () { return console.log('database connection successful!'); }, function (err) { return console.log('Error connecting to the database', err); });
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });
// Routing middleware
app.use('/coffee', coffeeRoutes_1.default);
app.use('/', coffeeController_1.defaultCoffee);
app.use(function (req, res, next) {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});
app.listen(3000);
