// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("KidsLearn Backend is running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/user");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
