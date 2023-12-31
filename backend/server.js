import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5001;
//import bodyParser from 'body-parser';

connectDB();
const app = express();




app.get('/', (req, res) => {  
    res.send('Server is ready');
    });

app.use('/api/products', productRoutes);
    

app.listen(port, () => console.log('Server at http://localhost:'+port+'/'));
    