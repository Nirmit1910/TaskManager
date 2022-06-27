const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not Found");
const errorHandler = require("./middleware/error-handler");

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://Nirmit:1234@cluster0.v9yu3z5.mongodb.net/TaskManager?retryWrites=true&w=majority"
    );
    // await connectDB(process.env.MONGO_URL);
    console.log("connected to db");
    app.use("/api/tasks", tasks);
    app.listen(port, () => {
      console.log("server started at port 3000");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
