import express from "express";
import connectDB from "./server";
import notFound from "./middlewares/notFound.middleware";
import config from "./config";
import errorHandler from "./middlewares/errorHandler.middleware";
import authorRouter from "./routes/author.routes";

const app = express();
app.use(express.json());

app.use("/author", authorRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
