const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function fetchStatusCodes(urls) {
  const httpResponse = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return {
        url,
        status: response.status,
      };
    })
  );
}
