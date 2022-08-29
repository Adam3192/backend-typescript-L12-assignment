import { RequestHandler } from "express";
import { Coffee, ICoffee } from "../models/coffee";

export const defaultCoffee: RequestHandler = (req, res, next) => {
    res.redirect('/coffee');
}

export const allCoffee: RequestHandler = async (req, res, next) => {
    let coffeeList = await Coffee.find();
    res.render('all-coffee', {
        coffeeList
    });
}

export const oneCoffee: RequestHandler = async (req, res, next) => {
    
    // get the route parameter called "name"
    let itemName = req.params.id;
    
    // use the find method to get the coffee item that matches the provided name
    let foundCoffee = await Coffee.findById(itemName)

    // if the name was not found, return not found
    if (!foundCoffee) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        })
    }

    // render the view with the found coffee item
    res.render('coffee-detail', {
        foundCoffee
    })
}

export const addCoffeePage: RequestHandler = (req, res, next) => {
    res.render('add-coffee');
}

export const addCoffee: RequestHandler = async (req, res, next) => {
    const newCoffee: ICoffee = new Coffee({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
   
    try {
        await newCoffee.save();
        res.redirect('/coffee');
    }
    catch (err) {
        res.status(500).send(err);
    }
   }

export const editCoffeePage: RequestHandler = async (req, res, next) => {
    let itemName: string = req.params.id;
    let foundCoffee = await Coffee.findById(itemName)

    if (!foundCoffee) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        })
    }

    res.render('edit-coffee', {
        foundCoffee
    });
}

export const editCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    const updatedCoffee: ICoffee = new Coffee({
        _id: itemId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
   
    let result = await Coffee.findByIdAndUpdate(itemId, { $set: updatedCoffee })
   
    res.redirect('/coffee');
   }

export const deleteCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let result = await Coffee.findByIdAndDelete(itemId);
    res.redirect('/coffee');
   }