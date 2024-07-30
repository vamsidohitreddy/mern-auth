import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import carpoolRoutes from './routes/carpoolRoutes.js';
import path from 'path';

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Connected to MongoDB');
}).catch((err)=>{
  console.log(err);
})
// mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.log('Error connecting to MongoDB:', err);
//   });

const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client', 'dist','index.html'))
});

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/carpools', carpoolRoutes);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode,
  });
});
