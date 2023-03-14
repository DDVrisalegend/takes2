import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {userRouter} from '../backend/controller/user.routes'
import {cocktailRouter} from '../backend/controller/cocktail.routes'
import {eventRouter} from '../backend/controller/event.routes'
//import {orderRouter} from '../backend/controller/order.routes'

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Back-end",
      version: "1.0.0",
    },
  },
  apis: ["./controller/*.routes.ts"],
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);


app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter)
app.use('/cocktails', cocktailRouter)
//app.use('/orders', orderRouter)
app.use('/events', eventRouter)

app.get("/status", (req, res) => {
  res.json({ message: "Back-end is running..." });
});

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port || 3000, () => {
  console.log(`Back-end is running on port ${port}.`);
});
