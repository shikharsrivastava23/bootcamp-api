const express = require("express");
const dotenv = require("dotenv");

// Route files
const bootcamp = require("./routes/bootcamps");

//Load ENV vars

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
