import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./Route/AuthRoute.js";
import {HoldingsModel} from "./model/HoldingsModel.js"
import {PositionsModel} from "./model/PositionsModel.js"
import marketRoute from "./Route/MarketRoute.js";
import orderRoute from "./Route/OrderRoute.js";


const PORT = process.env.PORT || 5501;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());


// app.get('/addHoldings', async(req, res)=>{
//   let tempHolding = [
//   {
//     name: "IDEA",
//     qty: 2,
//     avg: 11.00,
//     price:11.24,
//     net:"+2.18",
//     day: "+0.43",
//   },
//   {
//     name: "INFY",
//     qty: 2,
//     avg: 1551.23,
//     price:1555.45,
//     net:"+8.2",
//     day: "-2.3",
//     isLoss: true,
//   },
//   {
//     name: "MEESO",
//     qty: 2,
//     avg: 194.80,
//     price:192.80,
//     net:"-1.03",
//     day: "-5.34",
//     isLoss: true,
//   },
// ];

// tempHolding.forEach((item)=>{
//   let newHoldings = new HoldingsModel ({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price:item.price,
//     net:item.day,
//     day: item.day,
//   });

//   newHoldings.save();
// });
// res.send("Done");
// });

// app.get('/addPositions', async(req,res)=>{
//   let tempPositions = [
//     {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "TATASILV",
//     qty:10,
//     avg: 22.10,
//     price:23.65,
//     net:"+1.89%",
//     day: "+1.10",
//     isLoss: false,
//   },
//   ];
//   tempPositions.forEach((item) =>{
//     let newPosition = new PositionsModel ({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send("Done");
// });

app.use("/", authRoute);

app.use("/", orderRoute);

app.use("/", marketRoute);

app.get('/allHoldings', async(req, res) =>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async(req, res) =>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
    mongoose.connect(uri);
    console.log("MongoDB connected successfully.");
});