import mongoose from "mongoose";
import express from "express";
import bodyParser from 'body-parser';
import homeRouter from './routes/homeRouter.js';
import authRouter from './routes/authRouter.js'
import cors from 'cors';


const app = express();

// APP USE

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//BDD

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://romaincharlot12:9BkciBwmcOi60eH3@clusterapp.upwfsfc.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.on("error", () => {
    console.log("Erreur lors de la connexion à la base de données");
})

mongoose.connection.on("open", () => {
    console.log("Connexion à la base de données établie");  
    app.use('/', homeRouter);
    app.use('/auth', authRouter);
})

app.listen(9576,function(){
    console.log(`http://localhost:9576`);
});