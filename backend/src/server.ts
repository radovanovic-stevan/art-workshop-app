import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import multer from 'multer';
import userRouter from './routers/user.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(multer({storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public');
    },
    filename(req, file, callback) {
        callback(null,new Date().toISOString() + '-' + file.originalname + '.png')
    },
})}).single("slika"));

mongoose.connect('mongodb://localhost:27017/piaProjekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok')
})
 
const router = express.Router();
router.use('/users', userRouter)
//router.use('/news', newsRouter)

app.use('/', router);


app.listen(4000, () => console.log(`Express server running on port 4000`));