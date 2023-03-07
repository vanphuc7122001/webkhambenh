import express from 'express';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes';
require('dotenv').config()

const app = express();

//config body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// config app 
viewEngine(app);
initWebRoutes(app);




const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Backend listening on the port " + port);
})