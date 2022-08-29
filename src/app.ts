import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import path from 'path';
import coffeeRoutes from './routes/coffeeRoutes';
import { defaultCoffee } from './controllers/coffeeController';
import mongoose from 'mongoose';

const connectionString: string = 'mongodb://localhost:27017/coffeeDB';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'), 
    err => console.log('Error connecting to the database', err));

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

// Routing middleware
app.use('/coffee', coffeeRoutes);
app.use('/', defaultCoffee);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
})

app.listen(3000);