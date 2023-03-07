import express from 'express';
import homeController from '../controllers/homeController';
const router = express.Router();

const initRoutes = (app) =>{
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    return app.use('/',router);
}


module.exports = initRoutes;